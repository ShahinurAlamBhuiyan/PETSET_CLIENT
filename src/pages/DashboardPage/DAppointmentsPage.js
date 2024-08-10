import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Spinner } from 'react-bootstrap';

const DAppointmentsPage = () => {
  const { loggedInUser } = useContext(AuthContext)
  const [appointments, setAppointments] = useState([]);
  const [doctorNames, setDoctorNames] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      if (loggedInUser.role) {
        console.log(loggedInUser)
        try {
          let response;
          if (loggedInUser.role === 'admin') response = await axios.get('https://petset-api.onrender.com/appointments');
          else if (loggedInUser.role === 'doctor') response = await axios.get(`https://petset-api.onrender.com/appointments/doctor/${loggedInUser?.u_id}`);
          else if (loggedInUser.role === 'user') response = await axios.get(`https://petset-api.onrender.com/appointments/user/${loggedInUser?.u_id}`);

          setAppointments(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchAllAppointments();
  }, [loggedInUser]);

  const fetchDoctorById = async (drId) => {
    try {
      const res = await axios.get(`https://petset-api.onrender.com/doctor/${drId}`);
      setDoctorNames((prevDoctorNames) => ({
        ...prevDoctorNames,
        [drId]: res.data[0]?.dr_name || 'Unknown Doctor', // Default to 'Unknown Doctor' if name is not available
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch doctor names for each appointment
    appointments.forEach((appointment) => {
      fetchDoctorById(appointment.dr_id);
    });
  }, [appointments]);

  if (loading) {
    return <div className='centering_items_flex'><Spinner /></div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }




  const handleDeleteAppointment = async (app_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This appointment will be lost forever!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`https://petset-api.onrender.com/appointment/${app_id}`)
          Swal.fire({
            title: "Deleted!",
            text: "Appointment deleted successfully!",
            icon: "success"
          }).then(() => window.location.reload());
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-container" style={{ maxWidth: '90vw', maxHeight: '80vh', overflow: 'auto' }}>
          {appointments.length > 0 ?
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Dr. Name</th>
                  <th>Vising Fees</th>
                  <th>Owner Name</th>
                  <th>Owner Email</th>
                  <th>Owner Contact.</th>
                  <th>Appointment Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 &&
                  appointments.slice().reverse().map((appointment, index) => {
                    return (
                      <tr key={index}>
                        <td >{appointment.service_name}</td>
                        <td>{doctorNames[appointment.dr_id]}</td>
                        <td>{appointment.fees}</td>
                        <td>{appointment.owner_name}</td>
                        <td>{appointment.owner_email}</td>
                        <td>{appointment.contact}</td>
                        <td>{appointment.appointment_date}</td>
                        <td>
                          <button onClick={() => handleDeleteAppointment(appointment.a_id)} className='btn btn-outline-primary'>
                            Remove
                          </button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
            :
            <h2>
              No appointment taken.
            </h2>
          }
        </div>
      </div>
    </div>
  )
}

export default DAppointmentsPage