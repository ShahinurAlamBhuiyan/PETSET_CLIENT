import React, { useContext, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'

const CommentSection = ({ comments, adaptionId }) => {
    const { loggedInUser } = useContext(AuthContext);
    const [newCommentBody, setNewCommentBody] = useState('')


    const generateCommentId = () => {
        const timestamp = new Date().getTime();

        const uniqueID = `${timestamp}${loggedInUser?.u_id}`;

        return uniqueID;
    }


    const handleCommentSubmit = async () => {
        const newComment = {
            c_id: generateCommentId(),
            a_id: adaptionId,
            u_id: loggedInUser.u_id,
            c_name: loggedInUser.full_name,
            c_img_URL: loggedInUser.image_URL,
            c_body: newCommentBody,
            c_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        }

        try {
            await axios.post('http://localhost:8800/comment', newComment)
            Swal.fire({
                title: "Success!",
                text: "comment added",
                icon: "success"
            }).then(() => window.location.reload());
        } catch (error) {
            console.log(error)
        }


        console.log(newComment);
    };



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
                                        src={comment.c_img_URL}
                                        alt="Profile Pic"
                                        style={{ borderRadius: '50%', marginRight: '10px', width: '30px', height: '30px' }}
                                    />
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>{comment.c_name}</span>
                                        <Card.Text>{comment.c_body}</Card.Text>
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
