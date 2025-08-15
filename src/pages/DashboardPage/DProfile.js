import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'

const DProfile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newImageUrl, setNewImageUrl] = useState()
  const [isUpdate, setIsUpdate] = useState(false)


  const handleUpdateUser = async (e) => {
    const newData = {
      full_name: newName ? newName : loggedInUser.full_name,
      email: newEmail ? newEmail : loggedInUser.email,
      image_URL: newImageUrl ? newImageUrl : loggedInUser.image_URL
    }

    try {
      await axios.put(`http://localhost:5001/api/users/${loggedInUser.u_id}`, newData);
      setLoggedInUser((prevUser) => ({
        ...prevUser,
        full_name: newData.full_name,
        email: newData.email,
        image_URL: newData.image_URL,
      }));
      setIsUpdate(true);
      Swal.fire({
        title: "Success!",
        text: "Data Updated!",
        icon: "success"
      }).then(() => window.location.reload());
    } catch (error) {
      console.log(error)
    }

  };


  useEffect(() => {
    if (isUpdate) {
      // Update session storage
      sessionStorage.setItem('user', JSON.stringify(loggedInUser));
      setIsUpdate(false);
    }
  }, [loggedInUser, isUpdate]);

  // uploading image to the imgbb
  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    const data = new FormData();
    data.append('image', file);
    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, {
        method: 'POST',
        body: data,
      });
      const responseData = await response.json();
      setNewImageUrl((responseData.data.display_url).toString())
    } catch (error) {
      console.error(error, 'error');
    }

  };

  const isFormComplete = () => {
    if (newName || newEmail || newImageUrl) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className='container'>
      <h2>User Profile</h2>
      <Form>
        <Form.Group controlId="formMemoryDetails">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={loggedInUser.full_name}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="formMemoryDetails">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={loggedInUser.email}
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </Form.Group>
      </Form>
      <hr />
      <Form>
        <Form.Group controlId="formImageUrl">
          <Form.Label>Image Upload</Form.Label>
          <input type="file" name='image_URL' id="file" onChange={(e) => handleImageUpload(e)} />
        </Form.Group>
      </Form>
      <Button disabled={!isFormComplete()} variant="primary" onClick={handleUpdateUser}>
        Update Memory
      </Button>
    </div>
  );
};

export default DProfile;
