import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Food = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchingFoodProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/product?product_type=Pet Food`);
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchingFoodProduct();
  }, [])


  return (
    <div className='centering_items_flex'>
      {foods &&
        foods.map((Food, index) => (
          <ProductCard key={index} product={Food} />
        ))

      }
    </div>
  )
}

export default Food