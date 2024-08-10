import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    const fetchingMedicineProduct = async () => {
      try {
        const response = await axios.get(`https://petset-api.onrender.com/product?product_type=Pet Medicine`);
        setMedicines(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchingMedicineProduct();
  }, [])


  return (
    <div className='centering_items_flex'>
      {medicines &&
        medicines.map((medicine, index) => (
          <ProductCard key={index} product={medicine} />
        ))

      }
    </div>
  )
}

export default Medicine