import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'

const DAddServicePage = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [doctors, setDoctors] = useState([])
  const [newService, setNewService] = useState({
    s_id: '',
    dr_id: '',
    title: '',
    details: '',
    img_URL: '',
    created_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  });

  // Get all doctors...
  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get('http://localhost:8800/doctors')
        setDoctors(res.data)
      } catch (error) {

      }
    }
    fetchAllDoctors();
  }, [doctors.length])

  const generateServiceId = () => {
    const timestamp = new Date().getTime();
    const uniqueID = `${timestamp}${loggedInUser?.u_id}`;
    return uniqueID;
  }

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
      const service_id = generateServiceId()
      setNewService({
        ...newService,
        img_URL: responseData.data.display_url,
        s_id: service_id,
      })

    } catch (error) {
      console.error(error, 'error');
    }

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    console.log(newService)
    event.preventDefault();
    try {
      await axios.post("http://localhost:8800/services", newService)
      Swal.fire({
        title: "Great!",
        text: "Service Added!",
        icon: "success"
      }).then(() => window.location.reload());
    } catch (error) {
      console.log(error)
    }
  };

  const isFormComplete = () => {
    if (newService.s_id && newService.dr_id && newService.title && newService.details && newService.img_URL && newService.created_date) {
      return true
    } else {
      return false
    }
  }




  return (
    <div className="form_container">
      <Form onSubmit={handleFormSubmit} style={{ width: '80%' }} className="mb-4">
        <Form.Group controlId="formTitle">
          <Form.Label>Add a primary doctor for the service: &nbsp;</Form.Label>
          <Form.Select
            name="dr_id"
            value={newService.dr_id}
            onChange={handleInputChange}
          >
            <option value="">Select Dr.</option>
            {doctors &&
              doctors.map((doctor, index) => (
                <option value={doctor.dr_id}>{doctor.dr_name}</option>
              ))

            }
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Service Name"
            name="title"
            value={newService.title}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBody">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your product description"
            name="details"
            value={newService.details}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formImageUrl">
          <Form.Label>Image Upload</Form.Label>
          <input type="file" name='img_URL' id="file"
            onChange={(e) => handleImageUpload(e)}
          />
        </Form.Group>
        <Button
          disabled={!isFormComplete()}
          className="mt-2" variant="primary" type="submit">
          Add Service
        </Button>
      </Form>
    </div>
  )
}

export default DAddServicePage