import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const DOrders = () => {
  const { loggedInUser } = useContext(AuthContext)
  const [orders, setOrders] = useState([]);
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
  }, [orders.length]);



  useEffect(() => {
    const fetchAllOrders = async () => {
      if (loggedInUser.role) {
        try {
          let response;
          if (loggedInUser.role === 'admin') response = await axios.get('https://petset-api.onrender.com/orders');
          else if (loggedInUser.role === 'user') response = await axios.get(`https://petset-api.onrender.com/order/customer/${loggedInUser?.u_id}`);

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
      const res = await axios.put(`https://petset-api.onrender.com/order/${orderId}`, { status: newStatus });

      if (res.data) {
        setOrders((prevOrders) =>
          prevOrders.map((order) => (order.order_id === orderId ? { ...order, status: newStatus } : order))
        );
        Swal.fire({
          title: "Success!",
          text: "Order status changed successfully!",
          icon: "success"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productID) => {
    try {
      const res = await axios.get(`https://petset-api.onrender.com/product/${productID}`);
      // console.log(res.data[0])
      return res.data[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  };





  const handleDeleteOrder = async (orderID) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This order will be lost forever!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`https://petset-api.onrender.com/order/${orderID}`)
          Swal.fire({
            title: "Deleted!",
            text: "Order deleted successfully!",
            icon: "success"
          }).then(() => window.location.reload());
        }
      });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-container" style={{ maxWidth: '90vw', maxHeight: '80vh', overflow: 'auto' }}>
          {orders.length > 0 ?
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
                        <td>৳ {order.productPrice}</td>
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
            :
            <h2>No order ordered.</h2>

          }
        </div>
      </div>
    </div>
  )
}

export default DOrders