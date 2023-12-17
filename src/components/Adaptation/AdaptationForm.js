import React, { useContext, useState } from 'react';
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const AdaptationForm = ({ setShowForm }) => {
    const { loggedInUser } = useContext(AuthContext);
    const [newAdaptationPost, setNewAdaptationPost] = useState({
        a_id: '',
        u_id: loggedInUser?.u_id,
        title: '',
        details: '',
        img_URL: '',
        img_URL2: '',
        img_URL3: '',
        created_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    });

    const generateAdaptionId = () => {
        const timestamp = new Date().getTime();

        const uniqueID = `${timestamp}${loggedInUser?.u_id}`;

        return uniqueID;
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewAdaptationPost((prevAdaptationPost) => ({
            ...prevAdaptationPost,
            [name]: value,
        }));

    };


    // uploading image to the imgbb
    const handleImageUpload_1 = async (event) => {
        const file = event.target.files[0]
        const data = new FormData();
        data.append('image', file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, {
                method: 'POST',
                body: data,
            });

            const responseData = await response.json();
            setNewAdaptationPost({
                ...newAdaptationPost,
                img_URL: responseData.data.display_url,
            })

        } catch (error) {
            console.error(error, 'error');
        }

    };
    const handleImageUpload_2 = async (event) => {
        const file = event.target.files[0]
        const data = new FormData();
        data.append('image', file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, {
                method: 'POST',
                body: data,
            });

            const responseData = await response.json();
            setNewAdaptationPost({
                ...newAdaptationPost,
                img_URL2: responseData.data.display_url,
            })

        } catch (error) {
            console.error(error, 'error');
        }

    };
    const handleImageUpload_3 = async (event) => {
        const file = event.target.files[0]
        const data = new FormData();
        data.append('image', file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, {
                method: 'POST',
                body: data,
            });

            const responseData = await response.json();
            setNewAdaptationPost({
                ...newAdaptationPost,
                img_URL3: responseData.data.display_url,
            })

        } catch (error) {
            console.error(error, 'error');
        }

    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        newAdaptationPost.a_id = generateAdaptionId();
        try {
            console.log({newAdaptationPost})
            await axios.post("http://localhost:8800/adaption", newAdaptationPost)
            console.log(newAdaptationPost)
            setShowForm(false); 
            Swal.fire({
                title: "Great!",
                text: "Adoption post posted!",
                icon: "success"
            });
            setNewAdaptationPost({
                a_id: '',
                u_id: loggedInUser?.u_id,
                title: '',
                details: '',
                img_URL: '',
                img_URL2: '',
                img_URL3: '',
                created_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            })

        } catch (error) {
            console.log(error)
        }
    };

    const isFormComplete = () => {
        if (newAdaptationPost.title && newAdaptationPost.img_URL && newAdaptationPost.img_URL2 && newAdaptationPost.img_URL3 && newAdaptationPost.details && newAdaptationPost.created_date) {
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
                        value={newAdaptationPost.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBody">
                    <Form.Label>Adoption Post</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your post details"
                        name="details"
                        value={newAdaptationPost.details}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image Upload-1</Form.Label>
                    <input type="file" name='img_URL' id="file" onChange={(e) => handleImageUpload_1(e)} />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image Upload-2</Form.Label>
                    <input type="file" name='img_URL2' id="file" onChange={(e) => handleImageUpload_2(e)} />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image Upload-3</Form.Label>
                    <input type="file" name='img_URL3' id="file" onChange={(e) => handleImageUpload_3(e)} />
                </Form.Group>
                <Button disabled={!isFormComplete()} className="mt-2" variant="primary" type="submit">
                    Add Adoption Post
                </Button>
            </Form>
        </div>
    );
};

export default AdaptationForm;