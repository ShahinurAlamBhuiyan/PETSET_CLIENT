import React from 'react'
import aboutImg1 from '../../assets/about/about-1.jpg'
import aboutImg2 from '../../assets/about/about-2.jpg'
import aboutImg3 from '../../assets/about/about-3.jpg'

const AboutUs = () => {
    return (
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">About Us</h4>
                    <h1 className="display-4 mb-4"><span className="text-primary">Boarding</span> & <span className="text-secondary">Daycare</span></h1>
                    <h5 className="text-muted mb-3">Amet stet amet ut. Sit no vero vero no dolor. Sed erat ut sea. Just clita ut stet kasd at diam sit erat vero sit.</h5>
                    <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <ul className="list-inline">
                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Best In Industry</h5></li>
                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Emergency Services</h5></li>
                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>24/7 Customer Support</h5></li>
                    </ul>
                    <a href="/" className="btn btn-lg btn-primary mt-3 px-4">Learn More</a>
                </div>
                <div className="col-lg-5">
                    <div className="row px-3">
                        <div className="col-12 p-0">
                            <img className="img-fluid w-100" src={aboutImg1} alt="" />
                        </div>
                        <div className="col-6 p-0">
                            <img className="img-fluid w-100" src={aboutImg2} alt="" />
                        </div>
                        <div className="col-6 p-0">
                            <img className="img-fluid w-100" src={aboutImg3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs