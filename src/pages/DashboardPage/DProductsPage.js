import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DProductsModal from '../../components/Dashboard/DProductsModal';
import Swal from 'sweetalert2'

const DProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [product, setProduct] = useState(null);

  // getting all products
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleDeleteProduct = async (product_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This Product will no longer in PetSet",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:8800/product/${product_id}`)
          setProducts(products.filter(product => product.product_id !== product_id));
          Swal.fire({
            title: "Deleted!",
            text: "Product deleted successfully!",
            icon: "success"
          });
        }
      });
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
                <th></th>
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

                    <td> <img width={30} style={{ borderRadius: '50%' }} height={30} src={product.product_image} alt={product.product_name} /></td>
                    <td >
                      &nbsp;&nbsp;{product.product_name}
                    </td>
                    <td>৳ {product.product_price}</td>
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
