import React from 'react'

import featureImg from '../../assets/feature.jpg'

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid w-100" src={featureImg} alt="Special Care On Pets" />
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">Why Choose Us?</h4>
                    <h1 className="display-4 mb-4"><span className="text-primary">Special Care</span> On Pets</h1>
                    <p className="mb-4">Specially tailored attention, ensuring every pet's unique needs are met with the utmost care and devotion at PetSet.</p>
                    <div className="row py-2">
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-cat font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">Best In Industry</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-doctor font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">Emergency Services</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-care font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">Special Care</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-dog font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">Customer Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs