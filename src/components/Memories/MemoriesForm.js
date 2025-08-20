import React, { useContext, useState } from 'react';
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const MemoriesForm = ({ setShowForm }) => {
    const { loggedInUser } = useContext(AuthContext);
    const [newMemory, setNewMemory] = useState({
        author_id: loggedInUser?.id,
        title: '',
        details: '',
        img_URL: '',
    });



    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewMemory((prevMemory) => ({
            ...prevMemory,
            [name]: value,
        }));

    };


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
            console.log(responseData)
            setNewMemory({
                ...newMemory,
                img_URL: responseData.data.display_url,
            })

        } catch (error) {
            console.error(error, 'error');
        }

    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setShowForm(false); // from upper level
        try {
            await axios.post("https://petset-server.vercel.app/api/memories", newMemory)
            Swal.fire({
                title: "Great!",
                text: "Memory posted!",
                icon: "success"
            });
        } catch (error) {
            console.log(error)
        }
    };

    const isFormComplete = () => {
        if (newMemory.title && newMemory.img_URL && newMemory.details) {
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
                        name="details"
                        value={newMemory.details}
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