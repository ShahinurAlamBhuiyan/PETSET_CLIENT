import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const MemoryDetailsPage = () => {
    const { m_id } = useParams();
    const [memory, setMemory] = useState([]);
    useEffect(() => {
        const fetchMemoryDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5001/api/memories/${m_id}`);

                setMemory(res.data.memory);
            } catch (error) {
                console.error('Error fetching memory details:', error);
            }
        };

        fetchMemoryDetails();
    }, [m_id]);
    console.log(memory)
    return (
        <div className='container pb-5' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            {!memory && <Spinner animation='border' />}
            {memory &&
                <div>
                    <Link to={'/memories'}>
                        <Button variant="outline-primary" className='mt-2'>{'<'} back</Button>
                    </Link>
                    <Card className="mt-1" style={{ maxWidth: '500px' }} >
                        <Card.Img variant="top" src={memory.img_URL} />
                        <Card.Body>
                            <Card.Title>{memory.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Shared by {memory?.author_id?.full_name || 'Bhuiyan'}</Card.Subtitle>
                            <Card.Text>{memory.details}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Shared on {new Date(memory.createdAt).toLocaleDateString()}</Card.Footer>
                    </Card>
                </div>
            }
        </div>
    );
};

export default MemoryDetailsPage;
