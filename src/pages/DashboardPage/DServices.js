import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DServiceModal from '../../components/Dashboard/DServiceModal';

const DServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showModalView, setShowModalView] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [serviceId, setServiceId] = useState('');

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const response = await axios.get('http://localhost:8800/services');
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAllServices();
  }, [services.length, showModalEdit]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleServiceDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8800/service/${id}`)
      if (res.data) {
        setServices(services.filter(service => service.s_id !== id));
        alert('service deleted!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleViewSpecialist = (service) => {
    setServiceId(service.s_id)
    setSelectedService(service);
    setShowModalView(true);
  };

  const handleEditUser = (service) => { 
    setServiceId(service.s_id)
    setShowModalEdit(true);
  };



  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Service ID.</th>
                <th>Title</th>
                <th>Details</th>
                <th>Specialists</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.length > 0 &&
                services.slice().reverse().map((service, index) => (
                  <tr key={index}>
                    <td>{service.s_id}</td>
                    <td>
                      <img width={30} style={{ borderRadius: '50%' }} height={30} src={service.img_URL} alt="" />
                      &nbsp;&nbsp;{service.title}
                    </td>
                    <td>{service.details}</td>
                    <td>
                      <button onClick={() => handleViewSpecialist(service)} className="btn btn-outline-secondary">
                        View
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleEditUser(service)} className="btn btn-outline-secondary">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleServiceDelete(service.s_id)} className="btn btn-outline-primary">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <DServiceModal
        showModalView={showModalView}
        setShowModalView={setShowModalView}
        showModalEdit={showModalEdit}
        setShowModalEdit={setShowModalEdit}
        serviceId={serviceId}
      />
    </div>
  );
};

export default DServicesPage;
