import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SingleSpecialistCard from '../../../components/Services/SingleSpecialistCard/SingleSpecialistCard';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const SpecialistsPage = () => {
  const [service, setService] = useState([]);
  const { s_id } = useParams();


  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/services/${s_id}`);
        setService(res.data);
      } catch (error) {
        console.error('Error fetching Service details:', error);
      }
    };

    fetchServiceDetails();
  }, [s_id]);


  return (
    <div className='container mt-5'>
      <h2>Service Name:  {service && service[0]?.title}</h2>
      {/* About Service */}
      <div className='centering_items_flex'>
        <img width={375} height={300} src={service && service[0]?.img_URL} alt="hello" />

        <p className='text-justify' style={{ height: '50%', width: '60%' }}>
          {service[0]?.details} 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, commodi animi distinctio cumque temporibus accusamus minima repudiandae voluptas? Neque tenetur nam quaerat porro ea dignissimos enim ut in quo reprehenderit, pariatur optio voluptas ab ipsum est accusantium. Voluptatum, vel modi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quis doloremque id repellat maiores necessitatibus deserunt officia magni, dolore culpa cumque nobis porro provident veniam.</p>
      </div>

      {/* Specialist of this service */}
      <div className=' mt-5'>
        <h3>Specialist for {service && service[0]?.title}</h3>
        <div className='centering_items_flex mt-3'>
          {service &&
            service.map((specialist, index) => (
              <SingleSpecialistCard key={index} specialist={specialist} serviceId={service[0]?.s_id} />
            ))
          }
          {!service &&
            <div className='centering_items_flex'>
              <Spinner animation='border' />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default SpecialistsPage