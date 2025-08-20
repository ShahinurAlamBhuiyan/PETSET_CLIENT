import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const SingleSpecialistCard = ({ specialist, serviceId }) => {
    const [showDoctorDetails, setShowDoctorDetails] = useState(false);

    // Function to show the dr. details modal
    const handleShowDoctorDetails = () => {
        setShowDoctorDetails(true);
    };

    // Function to hide the dr. details modal
    const handleCloseDoctorDetails = () => {
        setShowDoctorDetails(false);
    };


    return (
        <Card style={{ width: '350px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img
                variant="top"
                dr_img
                src={specialist.img_URL ? specialist.img_URL : "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg2OC1zYXNpLTA2LmpwZw.jpg"}
                style={{ borderRadius: '15px 15px 0 0', height: '240px', objectFit: 'cover' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div className='centering_items_flex' style={{ justifyContent: 'space-between' }}>
                        <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{specialist?.dr_name}</Card.Title>
                        <p >fees ৳ {specialist?.visiting_fees}</p>
                    </div>
                    <Card.Text style={{ textAlign: 'justify', color: '#555' }}>Degrees: {specialist?.specialise}</Card.Text>
                </div>
                <Button onClick={handleShowDoctorDetails} variant="outline-primary" style={{ alignSelf: 'flex-end' }}>Details</Button>
                <Modal show={showDoctorDetails} onHide={handleCloseDoctorDetails}>
                    <Modal.Header closeLabel='cancel'>
                        <Modal.Title>Details of {specialist?.dr_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <p><strong>Degrees:</strong> {specialist?.specialise} </p>
                            <p><strong>Address:</strong> {specialist?.dr_address}</p>
                            <p><strong>Email:</strong> {specialist?.dr_email} </p>
                            <p><strong>Phone:</strong> {specialist?.dr_contact}</p>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDoctorDetails}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Button href={`/appointment/${serviceId}/${specialist._id}`} variant="outline-secondary" style={{ alignSelf: 'flex-end', marginTop: '10px' }}>Take Appointment</Button>
            </Card.Body>
        </Card>
    );
}

export default SingleSpecialistCard;
