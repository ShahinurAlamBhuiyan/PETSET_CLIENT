import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const MemoryDetailsPage = () => {
    const { m_id } = useParams();
    const [memory, setMemory] = useState([]);
    console.log(memory)
    useEffect(() => {
        const fetchMemoryDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/memories/${m_id}`);

                setMemory(res.data);
            } catch (error) {
                console.error('Error fetching memory details:', error);
            }
        };

        fetchMemoryDetails();
    }, [m_id]);
    console.log(memory)
    return (
        <div className='container' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            {!memory[0] && <Spinner animation='border' />}
            {memory[0] &&
                <div>
                    <Link to={'/memories'}>
                        <Button variant="outline-primary" className='mt-2'>{'<'} back</Button>
                    </Link>
                    <Card className="mt-1" style={{ maxWidth: '500px' }} >
                        <Card.Img variant="top" src={memory[0].img_URL} />
                        <Card.Body>
                            <Card.Title>{memory[0].title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Shared by {memory.creatorName || 'Shahinur Alam Bhuiyan'}</Card.Subtitle>
                            <Card.Text>{memory[0].details}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Shared on {memory[0].createdDate || '02 November, 2023'}</Card.Footer>
                    </Card>
                </div>
            }

            {/* {dummyImages && (
                <>
                    <h4>Images</h4>
                    <div className="image-container">
                        <ImageSlider dummyImages={dummyImages} />
                    </div>
                </>
            )} */}



        </div>
    );
};

export default MemoryDetailsPage;
