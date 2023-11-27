import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

import './Memories.css'

const MemoryCard = ({ data }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <div className='memories_container'>
            {data.map((post) => (
                <div className='memory_card'>
                    <Card key={post.id}>
                        <Card.Img variant="top" src="https://cms-lc.bestfriendspetcare.com/wp-content/uploads/2020/09/keep-your-pet-memories-alive-blog-featured.jpg" />
                        <Card.Body>
                            <Card.Title>{truncateText(post.body, 40)}...</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>{truncateText(post.body, 90)}...</Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default MemoryCard