import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const AdaptationDetailsPage = () => {
    const { a_id } = useParams();
    const [adaptationPost, setAdaptationPost] = useState([]);
    console.log(adaptationPost)
    useEffect(() => {
        const fetchadaptationPostDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/adaptation/${a_id}`);

                setAdaptationPost(res.data);
            } catch (error) {
                console.error('Error fetching adoption details:', error);
            }
        };

        fetchadaptationPostDetails();
    }, [a_id]);
    console.log(adaptationPost)
    return (
        <div className='container' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            {!adaptationPost[0] && <Spinner animation='border' />}
            {adaptationPost[0] &&
                <div>
                    <Link to={'/adaptation'}>
                        <Button variant="outline-primary" className='mt-2'>{'<'} back</Button>
                    </Link>
                    <Card className="mt-1" style={{ maxWidth: '500px' }} >
                        <Card.Img variant="top" src={adaptationPost[0].img_URL} />
                        <Card.Body>
                            <Card.Title>{adaptationPost[0].title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Shared by {adaptationPost.creatorName || 'Shahinur Alam Bhuiyan'}</Card.Subtitle>
                            <Card.Text>{adaptationPost[0].details}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Shared on {adaptationPost[0].createdDate || '02 November, 2023'}</Card.Footer>
                    </Card>
                </div>
            }
        </div>
    );
};

export default AdaptationDetailsPage;
