import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SingleSpecialistCard from '../../../components/Services/SingleSpecialistCard/SingleSpecialistCard';

const SpecialistsPage = () => {
  const [service, setService] = useState(null);
  const [specialists, setSpecialists] = useState(null)
  const { id } = useParams();

  // fetching those service and doctors
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.org/posts/${id}`);
        const ServiceData = await response.json();
        setService(ServiceData);
      } catch (error) {
        console.error('Error fetching Service details:', error);
      }
    };

    fetchServiceDetails();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.org/users');
        const jsonData = await response.json();
        setSpecialists(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className='container mt-5'>
      <h2>- {service?.slug}</h2>
      <div className='centering_items_flex' style={{ flexWrap: 'nowrap' }}>
        <img width={400} height={300} src="https://img.freepik.com/free-vector/tiny-veterinarians-examining-dog-flat-vector-illustration-doctor-treating-huge-animal-vet-clinic-taking-care-health-determining-diagnosis-hospital-medical-pet-service-veterinary-concept_74855-25368.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais" alt="hello" />
        <p>{service?.content}</p>
      </div>
      <div className='container '>
        <h2>Specialist for {service?.slug}</h2>
        <div className='centering_items_flex'>
          {specialists &&
            specialists.map((specialist) => (
              <SingleSpecialistCard key={specialist.id} specialist={specialist} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SpecialistsPage