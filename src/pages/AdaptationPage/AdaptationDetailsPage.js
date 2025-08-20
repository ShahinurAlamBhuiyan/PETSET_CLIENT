import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const AdaptationDetailsPage = () => {
    const { a_id } = useParams();
    const [adaptationPost, setAdaptationPost] = useState([]);
    const [comments, setComments] = useState([]);

    // get adaption details
    const fetchAdaptationPostDetails = async () => {
        try {
            const res = await axios.get(`https://petset-server.vercel.app/api/adoptions/${a_id}`);
            setAdaptationPost(res.data);
        } catch (error) {
            console.error('Error fetching adoption details:', error);
        }
    };

    const fetchComments = async () => {
        try {
            const res = await axios.get(`https://petset-server.vercel.app/api/adoptions/comments/post/${a_id}`);
            setComments(res.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchAdaptationPostDetails();
        fetchComments();
    }, [a_id, comments.length]);
    return (
        <Container className='mt-3 pb-5'>
            {!adaptationPost && <Spinner animation='border' />}
            {adaptationPost && (
                <Row>
                    <Col xs={12} md={8}>
                        <Link to={'/adaptation'}>
                            <Button variant="outline-primary" className='mb-3'>{'<'} Back</Button>
                        </Link>
                        <Card style={{ maxWidth: '100%' }}>
                            <Card.Img variant="top" src={adaptationPost.img_URL} />
                            <Card.Body>
                                <Card.Title>{adaptationPost.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Shared by {adaptationPost?.owner_id?.full_name || 'Amit Mahmud'}
                                </Card.Subtitle>
                                <Card.Text>{adaptationPost.details}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Shared on {new Date(adaptationPost.createdAt).toLocaleDateString()}</Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <CommentSection comments={comments} adaptionId={adaptationPost._id} />
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default AdaptationDetailsPage;
