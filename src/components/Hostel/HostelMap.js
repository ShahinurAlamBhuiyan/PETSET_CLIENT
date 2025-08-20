import React from 'react';
import './Hostel.css';

const HostelMap = () => {
    return (
        <div className="hostel-map-container">
            <div className="hostel-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.884233840328!2d90.46332948792329!3d23.802014840006443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c864383c35d3%3A0x1646d663724f15c5!2sRF27%2BR7F%20United%20city%2C%20Madani%20Ave%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1728237519295!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="hostel-location">
                <h2>Our Location</h2>
                <p>United City, Madani Avenue, Badda, Dhaka 1212</p>
            </div>
        </div>
    );
};

export default HostelMap;
