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
                <img src={service.image} alt="Service Icon" className="service_card-image" />
                <div className="text-content">
                    <div className="service_card-title">{service.slug}</div>
                    <div className="service_card-details">{truncateText(service.content, 160)}...</div>
                    <Link to={`/services/${service.id}`}>
                        <Button variant="outline-primary">Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleService;

