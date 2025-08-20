import React, { useContext, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'

const CommentSection = ({ comments, adaptionId }) => {
    const { loggedInUser } = useContext(AuthContext);
    const [newCommentBody, setNewCommentBody] = useState('')


    const handleCommentSubmit = async () => {
        const newComment = {
            adoption_id: adaptionId,
            author_id: loggedInUser.id,
            body: newCommentBody,
        }

        try {
            await axios.post('https://petset-server.vercel.app/api/adoptions/comments', newComment)
            Swal.fire({
                title: "Success!",
                text: "comment added",
                icon: "success"
            }).then(() => window.location.reload());
        } catch (error) {
            console.log(error)
        }
    };


    console.log(comments)
    return (
        <div className="mt-5">
            <h4>Comments</h4>
            <Form>
                <Form.Group controlId="newComment">
                    <Form.Label>Add a Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newCommentBody}
                        onChange={(e) => setNewCommentBody(e.target.value)}
                    />
                </Form.Group>
                <Button className='mt-2' variant="primary" type="button" onClick={handleCommentSubmit}>
                    Add Comment
                </Button>
            </Form>


            <div className="mt-3 " style={{ backgroundColor: 'grey', padding: '20px', borderRadius: '4px', maxHeight: '400px', overflowY: 'scroll' }}>
                {comments.length ?
                    comments?.map((comment, index) => (
                        <Card className='mb-1' key={index}>
                            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                <div className='centering_items_flex' style={{ justifyContent: 'flex-start', gap: '10px' }}>
                                    <img
                                        src={comment?.author_id?.image_URL || 'https://we-ha.com/wp-content/uploads/2019/09/PJK-Photo-2019-LOW-RESOLUTION.jpg'}
                                        alt="Profile Pic"
                                        style={{ borderRadius: '50%', marginRight: '10px', width: '55px', height: '55px' }}
                                    />
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>{comment?.author_id?.full_name}</span>
                                        <Card.Text>{comment.body}</Card.Text>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                    :
                    <p style={{ color: 'white' }}>No comments.</p>
                }
            </div>
        </div>
    );
};

export default CommentSection;
