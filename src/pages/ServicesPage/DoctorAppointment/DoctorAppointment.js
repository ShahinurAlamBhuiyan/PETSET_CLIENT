import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const DoctorAppointment = () => {
    const { loggedInUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const { dr_id, s_id } = useParams();
    const [service, setService] = useState({})
    const [doctor, setDoctor] = useState({})



    // fetching doctor details
    // useEffect(() => {
    //     const fetchDoctorDetails = async () => {
    //         try {
    //             const res = await axios.get(`http://localhost:5001/api/specialists/${dr_id}`);

    //             setDoctor(res.data[0]);
    //         } catch (error) {
    //             console.error('Error fetching memory details:', error);
    //         }
    //     };

    //     fetchDoctorDetails();
    // }, [dr_id]);

    // fetching service details
    useEffect(() => {
        const fetchServiceDetails = async () => {
            console.log(s_id, 's_id');
            console.log(dr_id, 'dr_id');
            try {
                const res = await axios.get(`http://localhost:5001/api/services/with-doctor/${s_id}`);
                setService(res.data.service)
                setDoctor(res.data.service.dr_ids.find(doctor => doctor._id === dr_id));
            } catch (error) {
                console.error('Error fetching memory details:', error);
            }
        };

        fetchServiceDetails();
    }, [doctor, service]);

    console.log(doctor, 'matchedDoctor');

    const [appointmentDetails, setAppointmentDetails] = useState({
        patient_id: loggedInUser.id,
        dr_id: dr_id,
        appointment_date: '',
        service_id: s_id,
        service_name: "",
        patient_name: loggedInUser?.full_name,
        patient_email: loggedInUser?.email,
        patient_contact: '+880',
        fees: '',
    });

    useEffect(() => {
        setAppointmentDetails((prevDetails) => ({
            ...prevDetails,
            fees: doctor?.visiting_fees,
        }));
    }, [doctor]);




    const handleAppointmentSubmit = async (e) => {
        e.preventDefault();
        const isAppointmentSuccessful = handleFormSubmission();
        appointmentDetails.service_name = service.service_name;
        // booking appointment...
        if (isAppointmentSuccessful) {
            try {
                await axios.post("http://localhost:5001/api/appointments", appointmentDetails)
                Swal.fire({
                    title: "Congratulation!",
                    text: "Appointment booked successfully! Assistant will contact you soon.",
                    icon: "success"
                });
                navigate('/appointments');
            } catch (error) {
                alert(error)
            }
        } else {
            alert('Error booking appointment. Please try again.');
        }
    };

    const handleFormSubmission = () => {
        // Handle form submission logic here
        return true;
    };


    return (
        <div className="container mt-5 pb-5 appointment_amit_container appointment_amit_container_none">
            <h2>An appointment with {doctor?.dr_name}</h2>
            <form onSubmit={handleAppointmentSubmit}>
                <div className="mb-3">
                    <label htmlFor="service_name" className="form-label">Service Name</label>
                    <input disabled type="text" className="form-control" id="service_name" value={service.service_name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id='patient_name' value={appointmentDetails.patient_name} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, patient_name: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Your Contact</label>
                    <input type='tel' className="form-control" id="patient_contact" value={appointmentDetails.patient_contact} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, patient_contact: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="patient_email" value={appointmentDetails.patient_email} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, patient_email: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="appointment_date" className="form-label">Appointment Date</label>
                    <input type="date" className="form-control" id="appointment_date" value={appointmentDetails.appointment_date} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, appointment_date: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="fee" className="form-label">Consultation Fee</label>
                    <input disabled type="text" className="form-control" id="fee" value={`৳ ${doctor?.visiting_fees}`} />

                </div>
                <button type="submit" className="btn btn-primary">Submit Appointment</button>
            </form>

            <div className="mt-4">
                <h4>Hospital Information</h4>
                <p>Address: {doctor.dr_address}</p>
            </div>
        </div>
    );
}

export default DoctorAppointment;
