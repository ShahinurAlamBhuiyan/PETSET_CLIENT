import React, { useEffect, useState } from 'react'
import SingleService from '../../components/Services/SingleService/SingleService';
import '../../components/Services/SingleService/SingleService.css';
import axios from 'axios';
import '../../components/Services/SingleService/SingleService.css';
const ServicesPage = () => {
    const [services, setServices] = useState([])
    // Fetching all memories --->
    useEffect(() => {
        const fetchAllMemories = async () => {
            try {
                const res = await axios.get("https://petset-server.vercel.app/api/services")
                setServices(res.data.services)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllMemories()
    }, [services.length])
    return (
        <div className=' mt-3 centering_items_flex pb-5' style={{ flexDirection: 'column', flexWrap: 'nowrap' }}>
            {services.length ?
                <>
                    <h3>Our services for your PET</h3>
                    <div className='centering_items_flex'>
                        {services.map((service, index) => (
                            <SingleService service={service} key={index} />
                        ))}
                    </div>
                </>
                :
                <div style={{ width: '100%', height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    No service found.
                </div>
            }
        </div>
    )
}

export default ServicesPage