import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DoctorAppointment = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null)

    // taking doctor's details
    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.org/users/${id}`);
                const doctorData = await response.json();
                setDoctor(doctorData);
            } catch (error) {
                console.error('Error fetching Service details:', error);
            }
        };

        fetchServiceDetails();
    }, [id]);

    const [appointmentDetails, setAppointmentDetails] = useState({
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        contact: '',
        appointmentDate: '',
        fee: '500',
    });
    const handleAppointmentSubmit = (e) => {
        e.preventDefault();

        const isAppointmentSuccessful = handleFormSubmission();

        if (isAppointmentSuccessful) {
            alert('Appointment booked successfully! Assistant will contact you soon.');
            console.log('Appointment Details:', appointmentDetails);
            navigate('/services');
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
            <h2>An appointment with Dr.{doctor?.firstname + " " + doctor?.lastname} for {doctor?.company.bs}</h2>
            <form onSubmit={handleAppointmentSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" value={appointmentDetails.name} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, name: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Your Contact</label>
                    <input placeholder='+880' type='number' className="form-control" id="contact" value={appointmentDetails.contact} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, contact: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" value={appointmentDetails.email} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, email: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
                    <input type="date" className="form-control" id="appointmentDate" value={appointmentDetails.appointmentDate} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, appointmentDate: e.target.value }))} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="fee" className="form-label">Consultation Fee</label>
                    <input disabled type="text" className="form-control" id="fee" value={appointmentDetails.fee} onChange={(e) => setAppointmentDetails((prevState) => ({ ...prevState, fee: e.target.value }))} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit Appointment</button>
            </form>

            <div className="mt-4">
                <h4>Hospital Information</h4>
                <p>Hospital Name: XYZ Hospital</p>
                <p>Address: 123 Main Street, Cityville</p>
            </div>
        </div>
    );
}

export default DoctorAppointment;
