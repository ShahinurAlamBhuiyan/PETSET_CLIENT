import React, { useState } from 'react';
import { Button, Form, Card, Dropdown } from 'react-bootstrap';

const CommentSection = ({ comments, onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = () => {
        onAddComment(newComment);
        setNewComment('');
    };

    return (
        <div className="mt-5">
            <h4>Comments</h4>
            {comments.map((comment, index) => (
                <div key={index} className="mb-3">
                    <Card>
                        <Card.Body>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {/* Profile picture icon */}
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Profile Pic"
                                    style={{ borderRadius: '50%', marginRight: '10px' }}
                                />
                                {/* User's name and comment */}
                                <div>
                                    <Card.Title>User's Name</Card.Title>
                                    <Card.Text>{comment}</Card.Text>
                                </div>
                            </div>
                            {/* 3-dot menu button with edit and delete options */}
                            <Dropdown className="float-end">
                                <Dropdown.Toggle variant="link" id="dropdown-basic">
                                    {/* You can use three dots icon here */}
                                    ⋮
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            <Form>
                <Form.Group controlId="newComment">
                    <Form.Label>Add a Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleCommentSubmit}>
                    Add Comment
                </Button>
            </Form>
            {/* Additional div for manually adding comments */}
            <div className="mt-3 ">
                {/* Card for manually added comments */}
                <Card className='mb-1'>
                    <Card.Body>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                className='mb-5'
                                src="https://via.placeholder.com/40"
                                alt="Profile Pic"
                                style={{ borderRadius: '50%', marginRight: '10px' }}
                            />
                            <div>
                                <Card.Title>Your Name</Card.Title>
                                <Card.Text>This is where you can add comments.</Card.Text>
                            </div>
                                <Dropdown className="float-end mb-5">

                                    <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                    </Card.Body>
                </Card>
                <Card className='mb-1'>
                    <Card.Body>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                className='mb-5'
                                src="https://via.placeholder.com/40"
                                alt="Profile Pic"
                                style={{ borderRadius: '50%', marginRight: '10px' }}
                            />
                            <div>
                                <Card.Title>Your Name</Card.Title>
                                <Card.Text>This is where you can add comments.</Card.Text>
                            </div>
                                <Dropdown className="float-end mb-5">

                                    <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                    </Card.Body>
                </Card>
                <Card className='mb-1'>
                    <Card.Body>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                className='mb-5'
                                src="https://via.placeholder.com/40"
                                alt="Profile Pic"
                                style={{ borderRadius: '50%', marginRight: '10px' }}
                            />
                            <div>
                                <Card.Title>Your Name</Card.Title>
                                <Card.Text>This is where you can add comments.</Card.Text>
                            </div>
                                <Dropdown className="float-end mb-5">

                                    <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CommentSection;
