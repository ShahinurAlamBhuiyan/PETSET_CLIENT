import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'

const DAdoptionModal = ({ showModalEdit, setShowModalEdit, showModalView, setShowModalView, adoptionId }) => {
    const [adoptionPost, setAdoptionPost] = useState({});
    const [newAdoptionPostTitle, setNewAdoptionPostTitle] = useState('');
    const [newAdoptionPostDetails, setNewAdoptionPostDetails] = useState('');
    const handleCloseModalView = () => {
        setShowModalEdit(false);
        setShowModalView(false)
    };

    useEffect(() => {
        const getAdoptionPostById = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/adaption/${adoptionId}`)
                setAdoptionPost(res.data[0])
            }
            catch (error) {
                console.log(error)
            }
        }
        getAdoptionPostById()
    }, [adoptionId])

    const handleUpdateAdoptionPost = async () => {
        const newAdoptionPost = {
            title: newAdoptionPostTitle ? newAdoptionPostTitle : adoptionPost.title,
            details: newAdoptionPostDetails ? newAdoptionPostDetails : adoptionPost.details,
        }
        console.log(newAdoptionPost)
        console.log(adoptionId)

        try {
            await axios.put(`http://localhost:8800/adoption/${adoptionId}`, newAdoptionPost)
            Swal.fire({
                title: "Great!",
                text: "Adoption post updated successfully!",
                icon: "success"
            }).then(() => window.location.reload());
        } catch (error) {
            console.log(error)
        }
    }



    const isFormComplete = () => {
        if (newAdoptionPostTitle || newAdoptionPostDetails) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            {/* edit */}
            <Modal show={showModalEdit} onHide={handleCloseModalView}>
                <Modal.Header closeButton>
                    <Modal.Title>{adoptionPost.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formAdoptionPostTitle">
                            <Form.Label>adoptionPost Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new adoptionPost title"
                                value={newAdoptionPostTitle}
                                onChange={(e) => setNewAdoptionPostTitle(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group controlId="formAdoptionPostDetails">
                            <Form.Label>adoptionPost Details</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new adoptionPost details"
                                value={newAdoptionPostDetails}
                                onChange={(e) => setNewAdoptionPostDetails(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalView}>
                        Close
                    </Button>
                    <Button disabled={!isFormComplete()} variant="primary" onClick={handleUpdateAdoptionPost}>
                        Update adoptionPost
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* view */}
            <Modal show={showModalView} onHide={handleCloseModalView}>
                <Modal.Header closeButton>
                    <Modal.Title>{adoptionPost.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ maxHeight: '300px', maxWidth: '400px', objectFit: 'fill' }} src={adoptionPost.img_URL} alt={adoptionPost.title} />

                    {/* <div > */}
                    <p><span style={{ fontWeight: 'bold' }}>Title: <br /></span> {adoptionPost.title}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Details: <br /></span> {adoptionPost.details}</p>
                    {/* </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalView}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default DAdoptionModal