import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'

const DAddServicePage = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [doctors, setDoctors] = useState([])
  const [newService, setNewService] = useState({
    dr_ids: [],
    service_name: '',
    service_details: '',
    service_img: '',
  });

  // Get all doctors...
  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/specialists')
        setDoctors(res.data)
      } catch (error) {

      }
    }
    fetchAllDoctors();
  }, [doctors.length])

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
      setNewService({
        ...newService,
        service_img: responseData.data.display_url,
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
    event.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/services", newService)
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
    return (
      newService.dr_ids.length > 0 &&
      newService.service_name.trim() !== '' &&
      newService.service_details.trim() !== '' &&
      newService.service_img.trim() !== ''
    );
  };





  return (
    <div className="form_container">
      <Form onSubmit={handleFormSubmit} style={{ width: '80%' }} className="mb-4">
        <Form.Group controlId="formTitle">
          <Form.Label>Add a primary doctor for the service: &nbsp;</Form.Label>
          <Form.Select
            name="dr_ids"
            value={newService.dr_ids[0] || ""}
            onChange={(e) =>
              setNewService({ ...newService, dr_ids: [e.target.value] })
            }
          >
            <option value="">Select Dr.</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.dr_name}
              </option>
            ))}
          </Form.Select>

        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Service Name"
            name="service_name"
            value={newService.service_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBody">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your product description"
            name="service_details"
            value={newService.service_details}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formImageUrl">
          <Form.Label>Image Upload</Form.Label>
          <input type="file" name='service_img' id="file"
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