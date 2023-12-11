import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './Memories.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const MemoryCard = ({ memories, currentPage, itemsPerPage }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Dashboard functions
    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete(`http://localhost:8800/memories/${id}`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleUpdate = async e => {
    //     e.preventDefault();
    //     try {
    //         await axios.put(`http://localhost:8800/memories/${id}`, updatedMemory)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className='memories_container'>
            {memories && memories.slice(startIndex, endIndex).map((post) => (
                <div key={post.m_id} className='memory_card'>
                    <Card>
                        <Card.Img  style={{objectFit:'cover'}} height={200} variant="top" src={post.img_URL} />
                        <Card.Body>
                            <Card.Title>{truncateText(post.details, 30)}...</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>{truncateText(post.details, 90)}...</Card.Text>
                            <Link to={`/memories/${post.m_id}`}>
                                <Button variant="outline-primary">Details</Button>
                            </Link>
                            {/* <Button onClick={() => handleDelete(post.m_id)} variant="outline-primary">Delete</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default MemoryCard;