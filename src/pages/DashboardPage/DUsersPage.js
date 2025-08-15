import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const DUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/users');
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, [users.length]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleDeleteUser = async (u_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This User will no longer in PetSet",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          // delete memory  for that user...
          await axios.delete(`http://localhost:5001/api/memories/user/${u_id}`);
          // delete user comments
          await axios.delete(`http://localhost:5001/api/adoptions/comments/user/${u_id}`);
          // delete user order
          await axios.delete(`http://localhost:5001/api/orders/customer/${u_id}`);
          // delete adoption  for that user...
          await axios.delete(`http://localhost:5001/api/adoptions/user/${u_id}`);
          // delete appointment  for that user...
          await axios.delete(`http://localhost:5001/api/appointments/user/${u_id}`)
          // delete memory  for that user...
          await axios.delete(`http://localhost:5001/api/memories/user/${u_id}`)
          await axios.delete(`http://localhost:5001/api/users/${u_id}`)
          setUsers(users.filter(user => user._id !== u_id));
          Swal.fire({
            title: "Deleted!",
            text: "User deleted successfully!",
            icon: "success"
          });
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap" >
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.slice().reverse().map((user, index) => (
                  <tr key={index}>
                    <td >
                      <img width={30} style={{ borderRadius: '50%' }} height={30} src={user.image_URL} alt='' />
                      &nbsp;&nbsp;{user.full_name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => handleDeleteUser(user._id)} className='btn btn-outline-primary'>
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

export default DUsersPage;
