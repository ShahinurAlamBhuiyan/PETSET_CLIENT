import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './Memories.css';
import { Link } from 'react-router-dom';

const MemoryCard = ({ data, currentPage, itemsPerPage }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className='memories_container'>
            {data.slice(startIndex, endIndex).map((post) => (
                <div key={post.id} className='memory_card'>
                    <Card>
                        <Card.Img variant="top" src="https://cms-lc.bestfriendspetcare.com/wp-content/uploads/2020/09/keep-your-pet-memories-alive-blog-featured.jpg" />
                        <Card.Body>
                            <Card.Title>{truncateText(post.title, 30)}...</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>{truncateText(post.body, 90)}...</Card.Text>
                            <Link to={`/memories/${post.id}`}>
                                <Button variant="outline-primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default MemoryCard;