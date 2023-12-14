import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const DServiceModal = ({ showModalView, setShowModalView, serviceId, showModalEdit, setShowModalEdit }) => {
  const [serviceWithSpecialists, setServiceWithSpecialists] = useState([])
  const [newServiceTitle, setNewServiceTitle] = useState('');
  const [newServiceDetails, setNewServiceDetails] = useState('');
  const [newDoctorId, setNewDoctorId] = useState('');

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/services/${serviceId}`);
        setServiceWithSpecialists(res.data);
      } catch (error) {
        console.error('Error fetching Service details:', error);
      }
    };
    fetchServiceDetails();
  }, [serviceId]);
  console.log(serviceWithSpecialists[0])
  console.log({ serviceId })

  const handleDeleteDoctor = async (dr_id) => {
    try {
      await axios.delete(`http://localhost:8800/service/doctor/${serviceId}/${dr_id}`);
      console.log(serviceId + " " + dr_id)
      setServiceWithSpecialists(prevState => prevState.filter(specialist => specialist.dr_id !== dr_id));
      alert('Doctor deleted successfully!');
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateService = async () => {
    try {
      if (newServiceTitle !== '' || newServiceDetails !== '') {
        // Update service title, details
        await axios.put(`http://localhost:8800/services/${serviceId}`, { title: newServiceTitle !== '' ? newServiceTitle : serviceWithSpecialists[0].title, details: newServiceDetails !== '' ? newServiceDetails : serviceWithSpecialists[0].details });


        // Update the state with the new data
        setServiceWithSpecialists(prevState => {
          const updatedService = { ...prevState[0] };
          if (newServiceTitle !== '') {
            updatedService.title = newServiceTitle;
          }
          if (newServiceDetails !== '') {
            updatedService.details = newServiceDetails;
          }

          return [updatedService, ...prevState.slice(1)];
        });
        alert('service updated!')
        setNewServiceTitle('')
        setNewServiceDetails('')
        setShowModalEdit(false);
      }

      console.log(serviceWithSpecialists[0].img_URL)
      // Fetch add new doctor to the service
      if (newDoctorId !== '') {
          await axios.post(`http://localhost:8800/services`, {
          dr_id: newDoctorId,
          s_id: serviceWithSpecialists[0]?.s_id,
          title: newServiceTitle !== '' ? newServiceTitle : serviceWithSpecialists[0]?.title,
          details: newServiceDetails !== '' ? newServiceDetails : serviceWithSpecialists[0]?.details,
          img_URL: serviceWithSpecialists[0].img_URL,
          created_date: serviceWithSpecialists[0].created_date,
        });
        alert('Dr. added to the service!');
        setNewDoctorId('');
        setShowModalEdit(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
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
          <Modal.Title>{serviceWithSpecialists[0]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {serviceWithSpecialists &&
            serviceWithSpecialists.map((specialist, index) => (
              <div className='centering_items_flex' key={index} style={{ justifyContent: 'space-between' }}>
                <p>{specialist.dr_id}</p>
                <p>{specialist.dr_name}</p>
                <p>{specialist.experience_yr} yrs</p>
                <p>$ {specialist.visiting_fees}</p>
                <span onClick={() => handleDeleteDoctor(specialist.dr_id)} className='btn btn-outline-danger'>delete dr.</span>
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
          <p>Add a new doctor:</p>
          <Form>
            <Form.Group controlId="formDoctorName">
              <Form.Label>Doctor ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter doctor id"
                value={newDoctorId}
                onChange={(e) => setNewDoctorId(e.target.value)}
              />
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