import React from 'react'
import './Hostel.css'
import serviceImg1 from '../../assets/hostel/hostelService/service1.jpg'
import serviceImg2 from '../../assets/hostel/hostelService/service2.jpg'
import serviceImg3 from '../../assets/hostel/hostelService/service3.jpg'

const servicesData = [
    {
        serviceName: 'Cat Boarding',
        serviceDetails: 'We provide short and long term (per night basis) stay for our furry cat friends here at Furryghor. From just a night to as many nights you need, your cat buddy will be safe & healthy with us.',
        imgURL: serviceImg1
    },
    {
        serviceName: 'Dog Boarding',
        serviceDetails: 'Keep your dog at our sky view mini dog apartments. Your dog gets 24/7 monitoring, a buddy to play with & his/her own litter station along with a dedicated play area.',
        imgURL: serviceImg2
    },
    {
        serviceName: 'Day Stay',
        serviceDetails: 'Fancy going out on a quick date or have an urgent "thing" to take care of and need a place for a few hours for your cat or dog? We got you covered!!',
        imgURL: serviceImg3
    }
]

const QualityHostelService = () => {
    return (
        <div className='qualityHostelService'>
            <h2 style={{ textAlign: 'center', color: '#ee5b2b' }}>OUR SERVICES</h2>
            <p style={{ textAlign: 'center', margin: '20px auto', width: '70vw', color: 'white' }}>PetSet Hostel Service is a premium pet boarding facility that provides both short and long-term stays for cats and dogs. With 24/7 monitoring, dedicated play areas, and personalized attention, it ensures a safe, secure, and fun environment for pets while their owners are away. Whether it's overnight boarding or a few hours of daycare, PetSet offers top-quality care, giving pet owners peace of mind.</p>
            <div className='qualityHostelServiceCardContainer'>
                {servicesData.map((service, index) => (
                    <div key={index} className='quality-service-card'>
                        <img src={service.imgURL} alt={service.serviceName} className='quality-service-card-img' />
                        <div className='quality-service-card-content'>
                            <h3>{service.serviceName}</h3>
                            <p>{service.serviceDetails}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QualityHostelService