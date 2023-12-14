import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DProductsModal from '../../components/Dashboard/DProductsModal';

const DProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, [products.length]);
  // console.log(products)
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleDeleteProduct = async (product_id) => {
    try {
      const res = await axios.delete(`http://localhost:8800/product/${product_id}`)
      if (res.data) {
        setProducts(products.filter(product => product.product_id !== product_id));
        alert('product deleted!')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleEditUser = (p) => {
    setProduct(p)
    setShowModalEdit(true);
  };


  return (
    <div className="row">
      <div>
        <DProductsModal
          showModalEdit={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          product={product}
        />
      </div>
      <div className="col-md-12">
        <div className="table-wrap" >
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.slice().reverse().map((product, index) => (
                  <tr key={index}>

                    <td >
                      <img width={30} style={{ borderRadius: '50%' }} height={30} src={product.product_image} alt={product.product_name} />
                      &nbsp;&nbsp;{product.product_name}
                    </td>
                    <td>{product.product_price}</td>
                    <td>{product.product_type}</td>
                    <td>{product.product_description}</td>
                    <td>
                      <button onClick={() => handleEditUser(product)} className="btn btn-outline-secondary">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteProduct(product.product_id)} className='btn btn-outline-primary'>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DProductsPage;
