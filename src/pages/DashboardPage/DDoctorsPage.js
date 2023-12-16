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
        const response = await axios.get('http://localhost:8800/doctors');
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
        text: "This doctor will no longer in PetSet!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Delete doctors appointment first....
          const resDeleteAppointment = await axios.delete(`http://localhost:8800/appointment/doctor/${doctor_id}`)

          if (resDeleteAppointment.data) {

            // delete doctors service second...
            const resDeleteDoctorService = await axios.delete(`http://localhost:8800/service/doctor/${doctor_id}`)


            if (resDeleteDoctorService.data) {
              // last delete dr. from doctors 
              await axios.delete(`http://localhost:8800/doctor/${doctor_id}`)
              setDoctors(doctors.filter(doctor => doctor.dr_id !== doctor_id));
            }
          }
          Swal.fire({
            title: "Deleted!",
            text: "Doctor deleted",
            icon: "success"
          });
        }
      });

    } catch (error) {
      console.log(error)
    }
  }

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
                    <td>$ {doctor.visiting_fees}</td>
                    <td>{doctor.dr_contact}</td>
                    <td>{doctor.dr_email}</td>
                    <td>
                      <button onClick={() => handleDeleteDoctor(doctor.dr_id)} className='btn btn-outline-primary'>
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