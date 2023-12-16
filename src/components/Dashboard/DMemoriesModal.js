import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const DMemoriesModal = ({  showModalEdit, setShowModalEdit, showModalView, setShowModalView, memoryId }) => {
    const [memory, setMemory] = useState({});
    const [newMemoryTitle, setNewMemoryTitle] = useState('');
    const [newMemoryDetails, setNewMemoryDetails] = useState('');
    const [newMemoryImageUrl, setNewMemoryImageUrl] = useState('');
    const handleCloseModalView = () => {
        setShowModalEdit(false);
        setShowModalView(false)
    };

    useEffect(() => {
        const getMemoryById = async () => {
            const res = await axios.get(`http://localhost:8800/memories/${memoryId}`)
            setMemory(res.data[0])
        }
        getMemoryById()
    }, [memoryId])
    // console.log(memory)

    const handleUpdateMemory = async () => {
        const newMemory = {
            title: newMemoryTitle ? newMemoryTitle : memory.title,
            details: newMemoryDetails ? newMemoryDetails : memory.details,
            img_URL: newMemoryImageUrl ? newMemoryImageUrl : memory.img_URL
        }

        try {
            const res = await axios.put(`http://localhost:8800/memories/${memoryId}`, newMemory)
            console.log(res)
            alert('Memory updated successfully!')
            window.location.reload()

        } catch (error) {
            console.log(error)
        }
    }

    // uploading image to the imgbb
    const handleImageUpload = async (event) => {
        const file = event.target.files[0]
        const data = new FormData();
        data.append('image', file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, {
                method: 'POST',
                body: data,
            });
            const responseData = await response.json();
            setNewMemoryImageUrl(responseData.data.display_url)
        } catch (error) {
            console.error(error, 'error');
        }

    };

    const isFormComplete = () => {
        if (newMemoryTitle || newMemoryDetails || newMemoryImageUrl) {
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
                    <Modal.Title>{memory.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formMemoryTitle">
                            <Form.Label>Memory Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new memory title"
                                value={newMemoryTitle}
                                onChange={(e) => setNewMemoryTitle(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group controlId="formMemoryDetails">
                            <Form.Label>Memory Details</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter new memory details"
                                value={newMemoryDetails}
                                onChange={(e) => setNewMemoryDetails(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <hr />
                    <Form>
                        <Form.Group controlId="formImageUrl">
                            <Form.Label>Image Upload</Form.Label>
                            <input type="file" name='image' id="file" onChange={(e) => handleImageUpload(e)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalView}>
                        Close
                    </Button>
                    <Button disabled={!isFormComplete()} variant="primary" onClick={handleUpdateMemory}>
                        Update Memory
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* view */}
            <Modal show={showModalView} onHide={handleCloseModalView}>
                <Modal.Header closeButton>
                    <Modal.Title>{memory.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ maxHeight: '300px', maxWidth: '400px', objectFit: 'fill' }} src={memory.img_URL} alt={memory.title} />

                    {/* <div > */}
                    <p><span style={{ fontWeight: 'bold' }}>Title: <br /></span> {memory.title}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Details: <br /></span> {memory.details}</p>
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

export default DMemoriesModal