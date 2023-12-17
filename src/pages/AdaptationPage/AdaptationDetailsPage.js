import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const AdaptationDetailsPage = () => {
    const { a_id } = useParams();
    const [adaptationPost, setAdaptationPost] = useState([]);
    const [comments, setComments] = useState([]);
    console.log(a_id)

    // get adaption details
    const fetchAdaptationPostDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/adaption/${a_id}`);
            setAdaptationPost(res.data);
        } catch (error) {
            console.error('Error fetching adoption details:', error);
        }
    };

    const fetchComments = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/adoption/comments/${a_id}`);
            setComments(res.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchAdaptationPostDetails();
        fetchComments();
    }, [a_id, comments.length]);


    console.log(comments)
    return (
        <Container className='mt-3'>
            {!adaptationPost[0] && <Spinner animation='border' />}
            {adaptationPost[0] && (
                <Row>
                    <Col xs={12} md={8}>
                        <Link to={'/adaptation'}>
                            <Button variant="outline-primary" className='mb-3'>{'<'} Back</Button>
                        </Link>
                        <Card style={{ maxWidth: '100%' }}>
                            <Card.Img variant="top" src={adaptationPost[0].img_URL} />
                            <Card.Body>
                                <Card.Title>{adaptationPost[0].title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Shared by {adaptationPost.creatorName || 'Amit Mahmud'}
                                </Card.Subtitle>
                                <Card.Text>{adaptationPost[0].details}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                Shared on {adaptationPost[0].created_date || '18 December, 2023'}
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <CommentSection comments={comments} adaptionId={adaptationPost[0].a_id} />
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default AdaptationDetailsPage;
