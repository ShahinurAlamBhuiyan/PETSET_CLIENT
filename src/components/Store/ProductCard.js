import React, { useState } from 'react';
import './Store.css';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const ProductCard = ({ product }) => {
    const [showForm, setShowForm] = useState(false); // State to control the visibility of the MemoriesForm modal

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };


    // Function to show the MemoriesForm modal
    const handleShowForm = () => {
        setShowForm(true);
    };

    // Function to hide the MemoriesForm modal
    const handleCloseForm = () => {
        setShowForm(false);
    };
    console.log(product)
    return (
        <div className="product_card">
            <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="product-image"
            />
            <div className="product_card-content">
                <div className="product-name centering_items_flex" style={{ justifyContent: 'space-between' }}>
                    {truncateText(product.product_name, 22)}
                    <button className="product-details" style={{ border: 'none', borderStyle: 'none' }} onClick={handleShowForm}>
                        <FontAwesomeIcon size="sm" icon={faInfo} />
                    </button>
                </div>
                <div className="product-price">$ {product.product_price}</div>
                <a href="/product_details" className="buy-btn">
                    Buy Now
                </a>
            </div>

            <Modal show={showForm} onHide={handleCloseForm}>
                <Modal.Header closeLabel='cancel'>
                    <Modal.Title>{product.product_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://cdn.shopify.com/s/files/1/0255/4205/files/can_dog_eat_human_medicine_480x480.jpg?v=1686677619" alt={product.product_name} />
                    <br />

                    <span style={{ fontWeight: 'bold', color: 'black' }}>Name:</span> {product.product_name} <br />
                    <span style={{ fontWeight: 'bold', color: 'black' }}>Type:</span> {product.product_type} <br />
                    <span style={{ fontWeight: 'bold', color: 'black' }}>Price:</span> $ {product.product_price} <br />
                    <span style={{ fontWeight: 'bold', color: 'black' }}>Description:</span> {product.product_description}<br />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseForm}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductCard;
