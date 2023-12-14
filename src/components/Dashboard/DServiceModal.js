import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const DServiceModal = ({ showModalView,setShowModalView, selectedService, showModalEdit, setShowModalEdit }) => {

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
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Details: {selectedService?.details}</p>
          {/* Add more details form here */}
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