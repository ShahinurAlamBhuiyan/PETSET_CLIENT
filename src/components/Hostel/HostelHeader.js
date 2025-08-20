import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Hostel.css';
import HostelReservationForm from './HostelReservationForm';

const HostelHeader = () => {
    return (
        <div className='hostel-header d-flex flex-column flex-lg-row align-items-center justify-content-center'>
            <div className='hostel-header-content text-lg-start p-4'>
                <h2>THE FIRST DOG & CAT HOSTEL <br /> IN DHAKA</h2>
                <p>PET-SET FOSTER HOME IS A 5-STAR QUALITY PET HOTEL FOR YOUR ANIMAL COMPANIONS IN BANGLADESH. WHEN YOU ARE AWAY, WE TAKE CARE OF YOUR FURBABIES WITH SAFETY, SECURITY, PRIVACY, AND ENSURE A WONDERFUL PLAYFUL TIME FOR THEM!</p>
                <Button variant="outline-primary" size="lg" className="px-3 d-lg-block">Talk to Pet-set</Button>
            </div>

            {/* Form Design */}
            <HostelReservationForm />
        </div>
    );
};

export default HostelHeader;
