import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const DAddProductPage = () => {
    const { loggedInUser } = useContext(AuthContext);
    const [newProduct, setNewProduct] = useState({
        product_type: '',
        product_name: '',
        product_price: '',
        product_description: '',
        product_image: '',
    });
    console.log(process.env.REACT_APP_IMGBB_API_KEY)

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewProduct((prevProduct) => ({
            ...prevProduct,
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
            setNewProduct({
                ...newProduct,
                product_image: responseData.data.display_url,
            })

        } catch (error) {
            console.error(error, 'error');
        }

    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("https://petset-server.vercel.app/api/products", newProduct)
            Swal.fire({
                title: "Great!",
                text: "Product posted!",
                icon: "success"
            }).then(() => window.location.reload());
        } catch (error) {
            console.log(error)
        }
    };

    const isFormComplete = () => {
        if (newProduct.product_type && newProduct.product_name && newProduct.product_price && newProduct.product_description && newProduct.product_image) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className="form_container">
            <Form onSubmit={handleFormSubmit} style={{ width: '80%' }} className="mb-4">
                <Form.Group controlId="formTitle">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Select
                        name="product_type"
                        value={newProduct.product_type}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Product Type</option>
                        <option value="Pet Food">Pet Food</option>
                        <option value="Pet Medicine">Pet Medicine</option>
                        <option value="Pet Toy">Pet Toy</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formTitle">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Product Name"
                        name="product_name"
                        value={newProduct.product_name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formTitle">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Product Price (৳)"
                        name="product_price"
                        value={newProduct.product_price}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBody">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your product description"
                        name="product_description"
                        value={newProduct.product_description}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image Upload</Form.Label>
                    <input type="file" name='product_image' id="file"
                        onChange={(e) => handleImageUpload(e)}
                    />
                </Form.Group>
                <Button
                    disabled={!isFormComplete()}
                    className="mt-2" variant="primary" type="submit">
                    Add Memory
                </Button>
            </Form>
        </div>
    )
}

export default DAddProductPage