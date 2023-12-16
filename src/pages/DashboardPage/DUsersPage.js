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
        const response = await axios.get('http://localhost:8800/users');
        setUsers(response.data);
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
    console.log(u_id)
    try {
      // delete memory  for that user...
      await axios.delete(`http://localhost:8800/memories/user/${u_id}`);

      // delete user comments
      await axios.delete(`http://localhost:8800/adoption/comments/${u_id}`);

      // delete user order
      await axios.delete(`http://localhost:8800/order/user/${u_id}`);
      // delete adoption  for that user...
      const adoptionRes = await axios.delete(`http://localhost:8800/adoption/user/${u_id}`);
      console.log(adoptionRes)
      // delete appointment  for that user...
      const resAppointment = await axios.delete(`http://localhost:8800/appointment/user/${u_id}`)
      if (resAppointment.data) {
        // delete memory  for that user...
        const resMemory = await axios.delete(`http://localhost:8800/memories/user/${u_id}`)
        if (resMemory.data) {
          const res = await axios.delete(`http://localhost:8800/user/${u_id}`)
          console.log({ res })
          if (res.data) {
            setUsers(users.filter(user => user.u_id !== u_id));
            alert('user deleted!')
          }
        }
      }
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
                      <button onClick={() => handleDeleteUser(user.u_id)} className='btn btn-outline-primary'>
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
