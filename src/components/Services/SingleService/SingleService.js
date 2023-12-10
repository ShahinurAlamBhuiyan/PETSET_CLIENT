import React from 'react';
import './SingleService.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <div className="service_card">
            <div className="service_card-content">
                <img src={service.img_URL ? service.img_URL : 'https://www.petofy.com/images/ServiceImages/PetFriendlyPlaces.jpg'} alt="Service Icon" className="service_card-image" />
                <div className="text-content">
                    <div className="service_card-title">{service.title}</div>
                    <div className="service_card-details">{truncateText(service.details, 160)}...</div>
                    <Link to={`/services/${service.s_id}`}>
                        <Button variant="outline-primary">Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleService;

