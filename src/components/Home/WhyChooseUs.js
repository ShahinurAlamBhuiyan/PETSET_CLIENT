import React from 'react'

import featureImg from '../../assets/feature.jpg'

const WhyChooseUs = () => {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid w-100" src={featureImg} alt="Special Care On Pets" />
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">Why Choose Us?</h4>
                    <h1 className="display-4 mb-4"><span className="text-primary">PetSet Perks: </span>Elevating Pet Care Beyond Boundaries</h1>
                    <p className="mb-4">Discover a world of unparalleled pet care at PetSet. From preserving precious memories and reuniting lost pets to providing gourmet cuisine and enriching toys, our comprehensive services are designed to ensure every furry friend's happiness and well-being. Choose PetSet for a personalized, holistic, and delightful pet care experience.</p>
                    <div className="row py-2">
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-cat font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">• Digital Memories</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-doctor font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">• Lost Pet Assistance</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-care font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">• Gourmet Cuisine and Enriching Toys</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-dog font-weight-normal text-secondary m-0 mr-3"> </h1>
                                <h5 className="text-truncate m-0">• Tailored Services</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs