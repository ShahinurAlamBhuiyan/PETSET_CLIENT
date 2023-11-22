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
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faSyringe} />
                            <h3 className="mb-3">Pet Feeding</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faBowlFood} />
                            <h3 className="mb-3">Pet Grooming</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faShieldCat} />
                            <h3 className="mb-3">Per Training</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faPaw} />
                            <h3 className="mb-3">Pet Exercise</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5"  style={{alignItems:'center'}}>
                            <FontAwesomeIcon className="font-weight-normal text-secondary mb-3" style={{width:'100px', height:'100px'}} icon={faNotesMedical} />
                            <h3 className="mb-3">Pet Treatment</h3>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                            <a className="text-uppercase font-weight-bold" href="/">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures