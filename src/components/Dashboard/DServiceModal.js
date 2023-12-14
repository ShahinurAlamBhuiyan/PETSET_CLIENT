import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const DServiceModal = ({ showModalView, setShowModalView, serviceId, showModalEdit, setShowModalEdit }) => {
  const [serviceWithSpecialists, setServiceWithSpecialists] = useState([])
  const navigate = useNavigate();

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

  console.log(serviceWithSpecialists)
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
          <p>Details: nothing</p>
          {/* Add more details form here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalEdit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DServiceModal