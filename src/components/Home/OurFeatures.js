import React from 'react'

import { faHouseChimneyMedical, faSyringe, faBowlFood, faShieldCat, faPaw, faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

const OurFeatures = () => {
    return (
        <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Our Features</h4>
                    <h1 className="display-4 m-0"><span className="text-primary">Premium</span> Pet Features</h1>
                </div>
                <div className="row pb-3">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5" style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faHouseChimneyMedical} />
                            <h3 className="mb-3">Pet Boarding</h3>
                            <p>Indulge your pets in luxury with our spacious and comfortable boarding facilities, ensuring a cozy retreat. Our attentive staff provides personalized care, making PetSet the preferred home away from home for your furry friends.</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faSyringe} />
                            <h3 className="mb-3">Pet Feeding</h3>
                            <p>Nutritious meals tailored to your pet's preferences, served with love at PetSet. Our dedicated feeding routine ensures your furry family members enjoy a healthy and satisfying dining experience. Energize. Play. Thrive.</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faBowlFood} />
                            <h3 className="mb-3">Pet Grooming</h3>
                            <p>Spoil your pets with the VIP treatment at PetSet! Our expert groomers deliver a pampering experience, from stylish makeovers to soothing spa sessions, leaving your furry companions looking and feeling their best.</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faShieldCat} />
                            <h3 className="mb-3">Per Training</h3>
                            <p>Transform your pet into the well-behaved companion you've always envisioned. Our skilled trainers at PetSet use positive reinforcement techniques to nurture good behavior, fostering a harmonious relationship between you and your furry friend.</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faPaw} />
                            <h3 className="mb-3">Pet Exercise</h3>
                            <p>Energize your pets with tailored exercise routines at PetSet. From invigorating walks to engaging playtime, our dedicated exercise programs ensure your furry companions stay active, happy, and maintain a healthy lifestyle. Tailored meals, purr-fectly served with love.</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faNotesMedical} />
                            <h3 className="mb-3">Pet Treatment</h3>
                            <p>Trust the well-being of your pets to our experienced veterinary team at PetSet. From routine check-ups to specialized care, we provide compassionate and comprehensive treatment, ensuring your furry friends thrive in a nurturing environment.</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures