import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

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
          if (loggedInUser.role === 'admin') response = await axios.get('http://localhost:8800/appointments');
          if (loggedInUser.role === 'doctor') response = await axios.get(`http://localhost:8800/appointments/doctor/${loggedInUser?.u_id}`);
          if (loggedInUser.role === 'user') response = await axios.get(`http://localhost:8800/appointments/user/${loggedInUser?.u_id}`);

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
      const res = await axios.get(`http://localhost:8800/doctor/${drId}`);
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }




  const handleDeleteAppointment = async (app_id) => {
    try {
      const res = await axios.delete(`http://localhost:8800/appointment/${app_id}`)
      if (res.data) {
        alert('appointment deleted successfully!');
        window.location.reload();
      }
    } catch (error) {
      console.log(error)
    }
    // try {
    //   // Delete doctors appointment first....
    //   const resDeleteAppointment = await axios.delete(`http://localhost:8800/appointment/${app_id}`)
    //   console.log('39')
    //   if (resDeleteAppointment.data) {
    //     console.log('41')
    //     // delete doctors service second...
    //     const resDeleteDoctorService = await axios.delete(`http://localhost:8800/service/doctor/${app_id}`)
    //     console.log('44')

    //     if (resDeleteDoctorService.data) {
    //       // last delete dr. from doctors 
    //       const res = await axios.delete(`http://localhost:8800/doctor/${app_id}`)

    //       if (res.data) {
    //         setAppointments(appointments.filter(appointment => appointment.a_id !== app_id));
    //         alert('doctor deleted!')
    //       }
    //     }
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-container" style={{ maxWidth: '90vw', maxHeight: '80vh', overflow: 'auto' }}>
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
        </div>
      </div>
    </div>
  )
}

export default DAppointmentsPage