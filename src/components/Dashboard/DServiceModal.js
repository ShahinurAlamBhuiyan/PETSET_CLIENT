import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'

const DServiceModal = ({ showModalView, setShowModalView, selectedService, showModalEdit, setShowModalEdit }) => {
  const [serviceWithSpecialists, setServiceWithSpecialists] = useState([])
  const [newServiceTitle, setNewServiceTitle] = useState('');
  const [newServiceDetails, setNewServiceDetails] = useState('');
  const [newDoctorId, setNewDoctorId] = useState('');
  const [doctors, setDoctors] = useState([])


  // Get service details
  useEffect(() => {
    const fetchServiceDetails = async () => {
      console.log(selectedService)
      try {
        const res = await axios.get(`https://petset-server.vercel.app/api/services/with-doctor/${selectedService._id}`);
        setServiceWithSpecialists(res.data.service);
      } catch (error) {
        console.error('Error fetching Service details:', error);
      }
    };
    fetchServiceDetails();
  }, [selectedService]);

  // Get all doctors...
  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get('https://petset-server.vercel.app/api/specialists')
        setDoctors(res.data)
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    }
    fetchAllDoctors();
  }, [showModalEdit])

  const handleDeleteDoctor = async (dr_id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This doctor will no longer be in this service",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
        // Send request to backend to remove doctor from service
        await axios.delete(`https://petset-server.vercel.app/api/services/doctor/${selectedService._id}/${dr_id}`);

        // Update state: remove the doctor from the service's dr_ids array
        setServiceWithSpecialists(prevService => ({
          ...prevService,
          dr_ids: prevService.dr_ids.filter(doctor => doctor._id !== dr_id)
        }));

        Swal.fire({
          title: "Deleted!",
          text: "Doctor deleted successfully!",
          icon: "success"
        });
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleUpdateService = async () => {
    try {
      // Build request payload dynamically
      const payload = {
        service_name: newServiceTitle !== '' ? newServiceTitle : selectedService?.service_name,
        service_details: newServiceDetails !== '' ? newServiceDetails : selectedService?.service_details
      };

      // If adding a doctor, just send newDoctorId — server will handle $addToSet
      if (newDoctorId !== '') {
        payload.newDoctorId = newDoctorId;
      }

      const res = await axios.put(
        `https://petset-server.vercel.app/api/services/${selectedService._id}`,
        payload
      );

      Swal.fire({
        title: "Great!",
        text: newDoctorId
          ? "Doctor added and/or service updated successfully!"
          : "Service updated successfully!",
        icon: "success"
      }).then(() => window.location.reload());

      // Reset form fields
      setNewServiceTitle('');
      setNewServiceDetails('');
      setNewDoctorId('');
      setShowModalEdit(false);

    } catch (error) {
      console.error("Error updating service:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update the service.",
        icon: "error"
      });
    }
  };


  const handleCloseModalView = () => {
    setShowModalView(false);
  };
  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };
  return (
    <div>
      {/* View/ ModalView */}
      <Modal show={showModalView} onHide={handleCloseModalView}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService.service_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(selectedService && serviceWithSpecialists) &&
            serviceWithSpecialists?.dr_ids?.map((specialist, index) => (
              <div className='centering_items_flex' key={index} style={{ justifyContent: 'space-between' }}>
                <p>{specialist.dr_name}</p>
                <p>{specialist.experience_yr} yrs</p>
                <p>$ {specialist.visiting_fees}</p>
                <span
                  onClick={() => handleDeleteDoctor(specialist._id)}
                  className='btn btn-outline-danger'>Delete</span>
              </div>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalView}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit/ ModalEdit */}
      <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formServiceTitle">
              <Form.Label>Service Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new service title"
                value={newServiceTitle}
                onChange={(e) => setNewServiceTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId="formServiceDetails">
              <Form.Label>Service Details</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new service details"
                value={newServiceDetails}
                onChange={(e) => setNewServiceDetails(e.target.value)}
              />
            </Form.Group>
          </Form>
          <hr />
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Add new doctor for the service: &nbsp;</Form.Label>
              <Form.Select
                name="dr_ids"
                value={newDoctorId}
                onChange={(e) => setNewDoctorId(e.target.value)}
              >
                <option value="">Select Dr.</option>
                {doctors &&
                  doctors
                    .filter(
                      (doctor) =>
                        !selectedService?.dr_ids?.includes(doctor._id) // only keep doctors not in service
                    )
                    .map((doctor, index) => (
                      <option key={index} value={doctor._id}>
                        {doctor.dr_name}
                      </option>
                    ))}
              </Form.Select>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateService}>
            Update Service
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DServiceModal