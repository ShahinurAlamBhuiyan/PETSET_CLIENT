import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './Memories.css';
import { Link } from 'react-router-dom';

const MemoryCard = ({ memories, currentPage, itemsPerPage }) => {
    console.log(memories)
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className='memories_container'>
            {memories && memories.slice(startIndex, endIndex).map((post) => (
                <div key={post.m_id} className='memory_card'>
                    <Card>
                        <Card.Img variant="top" src={post.img_URL} />
                        <Card.Body>
                            <Card.Title>{truncateText(post.details, 30)}...</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>{truncateText(post.details, 90)}...</Card.Text>
                            <Link to={`/memories/${post.m_id}`}>
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