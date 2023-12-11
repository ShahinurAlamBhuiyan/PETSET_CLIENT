import React from 'react'
import './Store.css'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCard = ({ product }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <div className="card">
            <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="product-image"
            />
            <div className="card-content">
                <div className="product-name centering_items_flex" style={{ justifyContent: 'space-between' }}>
                    {truncateText(product.product_name, 22)}
                    <div className="product-details">
                        <FontAwesomeIcon size="sm" icon={faInfo} />
                    </div>
                </div>
                <div className="product-price">$ {product.product_price}</div>
                <a href="/product_details" className="buy-btn">
                    Buy Now
                </a>
            </div>
        </div>
    )
}

export default ProductCard