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
                    <h5 className="text-muted mb-3">Tailored care for cherished companions - where every day is a vacation at PetSet Boarding & Daycare.</h5>
                    <p className="mb-4">At PetSet, our Boarding & Daycare services go beyond the ordinary, providing a home away from home for your cherished pets. Our dedicated team ensures a safe and nurturing environment where furry friends can play, relax, and receive personalized attention. Trust us to make every tail wag with joy, offering peace of mind for pet parents and a vacation haven for their beloved companions</p>
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