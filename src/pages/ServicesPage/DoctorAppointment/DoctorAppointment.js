import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const DoctorAppointment = () => {
    const { loggedInUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const { dr_id, s_id } = useParams();
    const [doctor, setDoctor] = useState({})
    const [service, setService] = useState({})



    // fetching doctor details
    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/doctor/${dr_id}`);

                setDoctor(res.data[0]);
            } catch (error) {
                console.error('Error fetching memory details:', error);
            }
        };

        fetchDoctorDetails();
    }, [dr_id]);

    // fetching service details
    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/service/${s_id}`);

                setService(res.data[0]);
            } catch (error) {
                console.error('Error fetching memory details:', error);
            }
        };

        fetchServiceDetails();
    }, [s_id]);


    const generateAppointmentId = () => {
        const timestamp = new Date().getTime();

        const uniqueID = `appointment${timestamp}`;

        return uniqueID;
    }
    const [appointmentDetails, setAppointmentDetails] = useState({
        u_id: loggedInUser.u_id,
        dr_id: dr_id,
        a_id: generateAppointmentId(),
        appointment_date: '',
        s_id: s_id,
        owner_name: loggedInUser?.full_name,
        owner_email: loggedInUser?.email,
        service_name: "",
        contact: '+880',
        fee: '',
    });

    useEffect(() => {
        setAppointmentDetails((prevDetails) => ({
            ...prevDetails,
            fee: doctor?.visiting_fees,
        }));
    }, [doctor]);




    const handleAppointmentSubmit = async (e) => {
        e.preventDefault();
        const isAppointmentSuccessful = handleFormSubmission();
        appointmentDetails.service_name = service.title;
        // booking appointment...
        if (isAppointmentSuccessful) {
            try {
                console.log({ appointmentDetails })
                await axios.post("http://localhost:8800/appointment", appointmentDetails)
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
        <div className="container mt-5">
            <h2>An appointment with {doctor?.dr_name}</h2>
            <form onSubmit={handleAppointmentSubmit}>
                <div className="mb-3">
                    <label htmlFor="fee" className="form-label">Service Name</label>
                    <input disabled type="text" className="form-control" id="service_name" value={service?.title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id='owner_name' value={appointmentDetails.owner_name} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, owner_name: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Your Contact</label>
                    <input type='tel' className="form-control" id="contact" value={appointmentDetails.contact} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, contact: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="owner_email" value={appointmentDetails.owner_email} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, owner_email: e.target.value }))} required />
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
