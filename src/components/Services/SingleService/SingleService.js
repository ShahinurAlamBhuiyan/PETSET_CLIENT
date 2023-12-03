import React from 'react';
import './SingleService.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <div className="card">
            <div className="card-content">
                <img src={service.image} alt="Service Icon" className="card-image" />
                <div className="text-content">
                    <div className="card-title">{service.slug}</div>
                    <div className="card-details">{truncateText(service.content, 160)}...</div>
                    <Link to={`/services/${service.slug}`}>
                        <Button variant="outline-primary">Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleService;

