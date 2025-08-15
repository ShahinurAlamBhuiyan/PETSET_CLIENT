import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const DDoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get all doctors
  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/specialists');
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAllDoctors();
  }, [doctors.length]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleDeleteDoctor = async (doctor_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This doctor will no longer be in PetSet!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {

          // 1️⃣ Delete appointments of this doctor
          await axios.delete(`http://localhost:5001/api/appointments/doctor/${doctor_id}`);

          // Get all services containing this doctor
          const resServices = await axios.get(`http://localhost:5001/api/services/doctor/${doctor_id}`);
          const services = resServices.data.services;

          // Remove doctor from each service
          for (let service of services) {
            await axios.delete(`http://localhost:5001/api/services/doctor/${service._id}/${doctor_id}`);
          }

          // 4️⃣ Delete the doctor itself
          await axios.delete(`http://localhost:5001/api/specialists/${doctor_id}`);

          // 5️⃣ Update UI
          setDoctors(doctors.filter(doctor => doctor._id !== doctor_id));

          Swal.fire({
            title: "Deleted!",
            text: "Doctor and references removed successfully!",
            icon: "success"
          });
        }
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong while deleting the doctor",
        icon: "error"
      });
    }
  };


  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-container" style={{ maxWidth: '80vw', maxHeight: '80vh', overflow: 'auto' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialize</th>
                <th>Degrees</th>
                <th>Experience</th>
                <th>Vising Fees</th>
                <th>Contact.</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.length > 0 &&
                doctors.slice().reverse().map((doctor, index) => (
                  <tr key={index}>
                    <td >
                      {doctor.dr_name}
                    </td>
                    <td>{doctor.specialise}</td>
                    <td>{doctor.dr_degrees}</td>
                    <td>{doctor.experience_yr} yrs.</td>
                    <td>৳ {doctor.visiting_fees}</td>
                    <td>{doctor.dr_contact}</td>
                    <td>{doctor.dr_email}</td>
                    <td>
                      <button onClick={() => handleDeleteDoctor(doctor._id)} className='btn btn-outline-primary'>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DDoctorsPage