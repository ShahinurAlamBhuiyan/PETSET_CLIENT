import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const DHostelOrders = () => {
    const { loggedInUser } = useContext(AuthContext);
    const [hostelOrders, setHostelOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all hostel orders
    useEffect(() => {
        const fetchHostelOrders = async () => {
            if (loggedInUser.role) {
                try {
                    let response;
                    if (loggedInUser.role === 'admin') {
                        response = await axios.get('http://localhost:8800/hostel-orders');
                    } else if (loggedInUser.role === 'user') {
                        response = await axios.get(`http://localhost:8800/hostel-order/customer/${loggedInUser.u_id}`);
                    }

                    setHostelOrders(response.data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            }
        };

        fetchHostelOrders();
    }, [loggedInUser]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const handleDeleteOrder = async (orderID) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "This hostel order will be lost forever!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`http://localhost:8800/hostel-order/${orderID}`);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Hostel order deleted successfully!",
                        icon: "success"
                    }).then(() => window.location.reload());
                }
            });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="table-container" style={{ maxWidth: '90vw', maxHeight: '80vh', overflow: 'auto' }}>
                    {hostelOrders.length > 0 ?
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Pet Type</th>
                                    <th>Guests</th>
                                    <th>Check-In</th>
                                    <th>Check-Out</th>
                                    <th>Total Amount</th>
                                    <th>Customer Name</th>
                                    {loggedInUser?.role === 'admin' && <th>Customer Email</th>}
                                    <th>Orderer Contact</th>
                                    <th>Shipping Address</th>
                                    <th>Order Date</th>
                                    {loggedInUser?.role === 'admin' && <th>Action</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {hostelOrders.slice().reverse().map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.pet_type}</td>
                                        <td>{order.guests}</td>
                                        <td>{order.check_in}</td>
                                        <td>{order.check_out}</td>
                                        <td>৳ {order.total_price}</td>
                                        <td>{order.orderer_name}</td>

                                        {loggedInUser?.role === 'admin' && <td>{order.orderer_email}</td>}
                                        <td>{order.orderer_contact}</td>
                                        <td>{order.shipping_address}</td>
                                        <td>{order.order_date}</td>
                                        {loggedInUser?.role === 'admin' && <td>
                                            <button onClick={() => handleDeleteOrder(order.order_id)} className='btn btn-outline-primary'>
                                                Remove
                                            </button>
                                        </td>}
                                        {loggedInUser?.role === 'admin' && (
                                            <td>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Change Status
                                                    </button>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        :
                        <h2>No hostel orders placed.</h2>
                    }
                </div>
            </div>
        </div>
    )
};

export default DHostelOrders;
