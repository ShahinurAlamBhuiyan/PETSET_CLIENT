import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Hostel.css';

const HostelHeader = () => {
    return (
        <div className='hostel-header d-flex flex-column flex-lg-row align-items-center justify-content-center'>
            <div className='hostel-header-content text-lg-start p-4'>
                <h2>THE FIRST DOG & CAT HOSTEL <br /> IN DHAKA</h2>
                <p>PET-SET FOSTER HOME IS A 5-STAR QUALITY PET HOTEL FOR YOUR ANIMAL COMPANIONS IN BANGLADESH. WHEN YOU ARE AWAY, WE TAKE CARE OF YOUR FURBABIES WITH SAFETY, SECURITY, PRIVACY, AND ENSURE A WONDERFUL PLAYFUL TIME FOR THEM!</p>
                <Button variant="outline-primary" size="lg" className="px-3 d-lg-block">Talk to Pet-set</Button>
            </div>

            {/* Form Design */}
            <div className='hostel-header-form mx-3 mt-4 mt-lg-0'>
                <Form className="bg-white shadow-lg p-5 rounded-lg">
                    <h3 className="text-center mb-4">Online Reservation</h3>

                    <Form.Group className="mb-3">
                        <Form.Label>Pet Type</Form.Label>
                        <Form.Control as="select" defaultValue="">
                            <option>Select Pet Type</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Guests</Form.Label>
                        <Form.Control type="number" defaultValue="2" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Check-in</Form.Label>
                            <Form.Control type="date" placeholder="Check-in Date" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Check-out</Form.Label>
                            <Form.Control type="date" placeholder="Check-out Date" />
                        </Form.Group>
                    </Row>

                    <Button variant="dark" type="submit" className="w-100">
                        Check Availability
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default HostelHeader;
