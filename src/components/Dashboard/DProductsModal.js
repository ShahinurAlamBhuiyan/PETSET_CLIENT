import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'

const DProductsModal = ({ showModalEdit, setShowModalEdit, product }) => {
    const [newProductName, setNewProductName] = useState('');
    const [newProductDetails, setNewProductDetails] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    console.log(product)
    const handleUpdateProduct = async () => {
        try {
            if (newProductName !== '' || newProductPrice !== '' || newProductDetails !== '') {
                // Update Product title, details
                await axios.put(`https://petset-server.vercel.app/api/products/${product._id}`,
                    {
                        product_name: newProductName !== '' ? newProductName : product.product_name,
                        product_price: newProductPrice !== '' ? newProductPrice : product.product_price,
                        product_description: newProductDetails !== '' ? newProductDetails : product.product_description,
                    });

                setNewProductName('')
                setNewProductPrice('')
                setNewProductDetails('')
                setShowModalEdit(false);
                Swal.fire({
                    title: "Congratulation!",
                    text: "Product updated!",
                    icon: "success"
                }).then(() => window.location.reload());
            }
        } catch (error) {
            console.log(error);
        }
    };


    const handleCloseModalEdit = () => {
        setShowModalEdit(false);
    };
    return (
        <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit: {product?.product_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formProductTitle">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product new name"
                            value={newProductName}
                            onChange={(e) => setNewProductName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group controlId="formProductTitle">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product new Price"
                            value={newProductPrice}
                            onChange={(e) => setNewProductPrice(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group controlId="formProductDetails">
                        <Form.Label>Product Details</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product new details"
                            value={newProductDetails}
                            onChange={(e) => setNewProductDetails(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalEdit}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdateProduct}>
                    Update Product
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DProductsModal