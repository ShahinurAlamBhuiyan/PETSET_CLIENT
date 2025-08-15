import React, { useEffect, useState } from 'react'
import SingleService from '../../components/Services/SingleService/SingleService';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const ServicesPage = () => {
    const [services, setServices] = useState([])
    // Fetching all memories --->
    useEffect(() => {
        const fetchAllMemories = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/services")
                setServices(res.data.services)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllMemories()
    }, [services])
    console.log(services)
    return (
        <div className='container mt-3 centering_items_flex pb-5' style={{ flexDirection: 'column', flexWrap: 'nowrap' }}>
            <h3>Our services for your PET</h3>
            <div className='centering_items_flex' >
                {services &&
                    services.map((service, index) => (
                        <SingleService service={service} key={index} />
                    ))
                }
                {!services &&
                    <div className='centering_items_flex'>
                        <Spinner animation='border' />
                    </div>
                }
            </div>
        </div>
    )
}

export default ServicesPage