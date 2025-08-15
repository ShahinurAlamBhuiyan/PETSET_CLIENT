import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Toy = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        const fetchingToyProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/products?product_type=Pet Toy`);
                setToys(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
        fetchingToyProduct();
    }, [])


    return (
        <div className='centering_items_flex'>
            {toys &&
                toys.map((Toy, index) => (
                    <ProductCard key={index} product={Toy} />
                ))
            }
        </div>
    )
}

export default Toy