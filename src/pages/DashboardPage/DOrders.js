import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';

const DOrders = () => {
  const { loggedInUser } = useContext(AuthContext)
  const [orders, setOrders] = useState([]);
  const [doctorNames, setDoctorNames] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataForOrders = async () => {
    const updatedOrders = await Promise.all(
      orders.map(async (order) => {
        const productInfo = await getProductById(order.product_id);
        return { ...order, productName: productInfo?.product_name, productPrice: productInfo?.product_price };
      })
    );

    setOrders(updatedOrders);
  };

  useEffect(() => {
    fetchDataForOrders();
    console.log(orders)
  }, [orders.length]);



  useEffect(() => {
    const fetchAllOrders = async () => {
      if (loggedInUser.role) {
        try {
          let response;
          if (loggedInUser.role === 'admin') response = await axios.get('http://localhost:8800/orders');
          else if (loggedInUser.role === 'user') response = await axios.get(`http://localhost:8800/order/customer/${loggedInUser?.u_id}`);

          setOrders(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchAllOrders();
  }, [loggedInUser]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleChangeStatus = async (orderId, newStatus) => {
    try {
      const res = await axios.put(`http://localhost:8800/order/${orderId}`, { status: newStatus });

      if (res.data) {
        setOrders((prevOrders) =>
          prevOrders.map((order) => (order.order_id === orderId ? { ...order, status: newStatus } : order))
        );
        alert('Order status updated successfully!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productID) => {
    try {
      const res = await axios.get(`http://localhost:8800/product/${productID}`);
      // console.log(res.data[0])
      return res.data[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  };





  const handleDeleteOrder = async (orderID) => {
    try {
      const res = await axios.delete(`http://localhost:8800/order/${orderID}`)
      if (res.data) {
        alert('order deleted successfully!');
        window.location.reload();
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-container" style={{ maxWidth: '90vw', maxHeight: '80vh', overflow: 'auto' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Contact</th>
                <th>Shipping Address</th>
                <th>Order Date</th>

                <th>Shipping Status</th>
                <th>Action</th>
                {loggedInUser?.role === 'admin' && <th>Change Status</th>}
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 &&
                orders.slice().reverse().map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.productName}</td>
                      <td>$ {order.productPrice}</td>
                      <td >{order.orderer_name}</td>
                      <td>{order.orderer_email}</td>
                      <td>{order.orderer_contact}</td>
                      <td>{order.shipping_address}</td>
                      <td>{order.order_date}</td>
                      <td>{order.status}</td>
                      <td>
                        <button onClick={() => handleDeleteOrder(order.order_id)} className='btn btn-outline-primary'>
                          Remove
                        </button>
                      </td>
                      {loggedInUser?.role === 'admin' && (
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Change Status
                            </button>
                            <div className="dropdown-menu">
                              <button className="dropdown-item" onClick={() => handleChangeStatus(order.order_id, 'Processing')}>
                                Processing
                              </button>
                              <button className="dropdown-item" onClick={() => handleChangeStatus(order.order_id, 'Shipping')}>
                                Shipping
                              </button>
                              <button className="dropdown-item" onClick={() => handleChangeStatus(order.order_id, 'Pending')}>
                                Pending
                              </button>
                            </div>
                          </div>
                        </td>
                      )}
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DOrders