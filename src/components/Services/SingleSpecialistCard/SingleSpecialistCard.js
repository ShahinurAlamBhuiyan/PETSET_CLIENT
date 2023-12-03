import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleSpecialistCard = ({ specialist }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <Card>
            <Card.Img variant="top" src="https://cms-lc.bestfriendspetcare.com/wp-content/uploads/2020/09/keep-your-pet-memories-alive-blog-featured.jpg" />
            <Card.Body>
                <Card.Title>Dr. John Abraham</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>DVM</Card.Text>
                {/* <Link to={`/memories/${post.id}`}> */}
                <Button variant="outline-primary">Details</Button>
                {/* </Link> */}
            </Card.Body>
        </Card>
    );
}

export default SingleSpecialistCard;

