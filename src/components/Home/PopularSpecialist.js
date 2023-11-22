import React from 'react'

import specialistImage1 from '../../assets/specialist/team-1.jpg'
import specialistImage2 from '../../assets/specialist/team-2.jpg'
import specialistImage3 from '../../assets/specialist/team-3.jpg'
import specialistImage4 from '../../assets/specialist/team-4.jpg'

const PopularSpecialist = () => {
    return (
        <div class="container mt-5 pt-5 pb-3">
            <div class="d-flex flex-column text-center mb-5">
                <h4 class="text-secondary mb-3">Popular Specialist</h4>
                <h1 class="display-4 m-0">Meet Our <span class="text-primary">Popular Animal Specialist</span></h1>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="team card position-relative overflow-hidden border-0 mb-4">
                        <img class="card-img-top" src={specialistImage1} alt="" />
                        <div class="card-body text-center p-0">
                            <div class="team-text d-flex flex-column justify-content-center bg-light">
                                <h5>Mollie Ross</h5>
                                <i>Founder & CEO</i>
                            </div>
                            <div class="team-social d-flex align-items-center justify-content-center bg-dark">
                                <a href="/" className="btn btn-lg btn-primary mt-3 px-4">Take Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team card position-relative overflow-hidden border-0 mb-4">
                        <img class="card-img-top" src={specialistImage2} alt="" />
                        <div class="card-body text-center p-0">
                            <div class="team-text d-flex flex-column justify-content-center bg-light">
                                <h5>Jennifer Page</h5>
                                <i>Chef Executive</i>
                            </div>
                            <div class="team-social d-flex align-items-center justify-content-center bg-dark">
                                <a href="/" className="btn btn-lg btn-primary mt-3 px-4">Take Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team card position-relative overflow-hidden border-0 mb-4">
                        <img class="card-img-top" src={specialistImage3} alt="" />
                        <div class="card-body text-center p-0">
                            <div class="team-text d-flex flex-column justify-content-center bg-light">
                                <h5>Kate Glover</h5>
                                <i>Doctor</i>
                            </div>
                            <div class="team-social d-flex align-items-center justify-content-center bg-dark">
                                <a href="/" className="btn btn-lg btn-primary mt-3 px-4">Take Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team card position-relative overflow-hidden border-0 mb-4">
                        <img class="card-img-top" src={specialistImage4} alt="" />
                        <div class="card-body text-center p-0">
                            <div class="team-text d-flex flex-column justify-content-center bg-light">
                                <h5>Lilly Fry</h5>
                                <i>Trainer</i>
                            </div>
                            <div class="team-social d-flex align-items-center justify-content-center bg-dark">
                                {/* <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '35px', height: '36px' }} href="/"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '35px', height: '36px' }} href="/"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '35px', height: '36px' }} href="/"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-primary rounded-circle text-center px-0" style={{ width: '35px', height: '36px' }} href="/"><i class="fab fa-instagram"></i></a> */}

                                <a href="/" className="btn btn-lg btn-primary mt-3 px-4">Take Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularSpecialist