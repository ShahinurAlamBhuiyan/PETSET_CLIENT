import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DServiceModal from '../../components/Dashboard/DServiceModal';
import Swal from 'sweetalert2'

const DServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModalView, setShowModalView] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [serviceId, setServiceId] = useState('');

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const response = await axios.get('https://petset-api.onrender.com/services');
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
      Swal.fire({
        title: "Are you sure?",
        text: "This Service will no longer in PetSet!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`https://petset-api.onrender.com/service/${id}`)
          setServices(services.filter(service => service.s_id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Service deleted successfully!",
            icon: "success"
          });
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  const handleViewSpecialist = (service) => {
    setServiceId(service.s_id)
    setShowModalView(true);
  };

  const handleEditUser = (service) => {
    setServiceId(service.s_id)
    setShowModalEdit(true);
  };
  console.log(services)


  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID.</th>
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
                    <td><img src={service.img_URL} width={30} height={30} style={{ borderRadius: '50%' }} alt="" /></td>
                    <td>{service.title}</td>
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
