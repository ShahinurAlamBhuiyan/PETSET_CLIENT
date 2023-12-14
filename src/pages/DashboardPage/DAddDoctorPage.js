import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const DAddDoctorPage = () => {
  const { loggedInUser } = useContext(AuthContext);

  const generateDoctorId = () => {
    const timestamp = new Date().getTime();
    const uniqueID = `${timestamp}${loggedInUser?.u_id}`;
    return uniqueID;
  }
  // const [doctors, set] = useState([])
  const [newDoctor, setNewDoctor] = useState({
    dr_id: generateDoctorId(),
    dr_name: '',
    specialise: '',
    experience_yr: '',
    dr_degrees: '',
    dr_address: '',
    visiting_fees: '',
    dr_contact: '',
    dr_email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewDoctor((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    console.log(newDoctor)
    event.preventDefault();
    try {
      await axios.post("http://localhost:8800/doctors", newDoctor)
      alert('Service Added!');
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };

  const isFormComplete = () => {
    if (newDoctor.dr_id && newDoctor.dr_name && newDoctor.specialise && newDoctor.experience_yr && newDoctor.dr_degrees && newDoctor.dr_address && newDoctor.visiting_fees && newDoctor.dr_contact && newDoctor.dr_email) {
      return true
    } else {
      return false
    }
  }
  return (
    <div className="form_container">
      <Form onSubmit={handleFormSubmit} style={{ width: '80%' }} className="mb-4">
        <Form.Group controlId="formTitle">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Doctor Name"
            name="dr_name"
            value={newDoctor.dr_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Specialize</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Doctor Specialize fields"
            name="specialise"
            value={newDoctor.specialise}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Experience Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Doctor Experience Years"
            name="experience_yr"
            value={newDoctor.experience_yr}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Doctor Degrees</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Doctor Degrees"
            name="dr_degrees"
            value={newDoctor.dr_degrees}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Doctor Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Doctor Address"
            name="dr_address"
            value={newDoctor.dr_address}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Doctor Visiting Fees</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Doctor Fees"
            name="visiting_fees"
            value={newDoctor.visiting_fees}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Doctor Contact No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Doctor Contact"
            name="dr_contact"
            value={newDoctor.dr_contact}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Doctor Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Doctor Email"
            name="dr_email"
            value={newDoctor.dr_email}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="formImageUrl">
          <Form.Label>Image Upload</Form.Label>
          <input type="file" name='img_URL' id="file"
            onChange={(e) => handleImageUpload(e)}
          />
        </Form.Group> */}
        <Button
          disabled={!isFormComplete()}
          className="mt-2" variant="primary" type="submit">
          Add Service
        </Button>
      </Form>
    </div>
  )
}

export default DAddDoctorPage