import { useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MemoriesForm = ({ setShowForm }) => {
    const { user } = useUser();

    const [newMemory, setNewMemory] = useState({
        title: '',
        body: '',
        imageUrl: '',
        sharedBy: user.fullName,
        userID: user.id,
        sharedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewMemory((prevMemory) => ({
            ...prevMemory,
            [name]: value,
        }));

    };


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
            setNewMemory({
                ...newMemory,
                imageUrl: responseData.data.display_url,
            })

        } catch (error) {
            console.error(error, 'error');
        }

    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setShowForm(false); // from upper level
        console.log({ newMemory })
        alert('Memory posted!');
    };

    const isFormComplete = () => {
        if (newMemory.title && newMemory.imageUrl && newMemory.body && newMemory.sharedBy && newMemory.sharedDate) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className="form_container">
            <Form onSubmit={handleFormSubmit} style={{ width: '80%' }} className="mb-4">
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={newMemory.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBody">
                    <Form.Label>Memory</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your memory"
                        name="body"
                        value={newMemory.body}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image Upload</Form.Label>
                    <input type="file" name='image' id="file" onChange={(e) => handleImageUpload(e)} />
                </Form.Group>
                <Button disabled={!isFormComplete()} className="mt-2" variant="primary" type="submit">
                    Add Memory
                </Button>
            </Form>
        </div>
    );
};

export default MemoriesForm;