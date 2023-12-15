import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const DProductsModal = ({ showModalEdit, setShowModalEdit, product }) => {
    const [newProductName, setNewProductName] = useState('');
    const [newProductDetails, setNewProductDetails] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    // const [product, setProduct] = useState([]);

    // console.log(product)
    console.log(newProductName);
    console.log(newProductPrice);
    console.log(newProductDetails);


    const handleUpdateProduct = async () => {
        try {
            if (newProductName !== '' || newProductPrice !== '' || newProductDetails !== '') {
                // Update service title, details
                await axios.put(`http://localhost:8800/product/${product.product_id}`,
                    {
                        product_name: newProductName !== '' ? newProductName : product.product_name,
                        product_price: newProductPrice !== '' ? newProductPrice : product.product_price,
                        product_description: newProductDetails !== '' ? newProductDetails : product.product_description,
                    });

                alert('product updated!')
                setNewProductName('')
                setNewProductPrice('')
                setNewProductDetails('')
                setShowModalEdit(false);
                window.location.reload();
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
                    <Form.Group controlId="formServiceTitle">
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
                    <Form.Group controlId="formServiceTitle">
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
                    <Form.Group controlId="formServiceDetails">
                        <Form.Label>Service Details</Form.Label>
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
                    Update Service
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DProductsModal