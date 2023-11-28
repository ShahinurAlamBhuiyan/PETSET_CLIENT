import React from 'react'

import Carousel1 from '../../assets/Carousel/carousel-1.jpg'
import Carousel2 from '../../assets/Carousel/carousel-2.jpg'

const HomeCarousel = () => {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                            <img className="w-100"  src={Carousel1} alt="Keep Your Pet Happy" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth:'900px'}}>
                                    <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
                                    <h1 className="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                                    <h5 className="text-white mb-3 d-none d-sm-block">Where Tail Wags and Whiskers Flourish – Your One-stop Haven to Keep Your Pet Pawsitively Happy!</h5>
                                    <a href="/" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4" style={{marginRight:'10px'}}>Book Now</a>
                                    <a href="/" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Learn More</a>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100"  src={Carousel2} alt="Best Pet Services" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth:'900px'}}>
                                    <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
                                    <h1 className="display-3 text-white mb-3">Pet Spa & Grooming</h1>
                                    <h5 className="text-white mb-3 d-none d-sm-block">Where pampering meets purr-fection and tails wag with delight – Unleash the ultimate spa experience for your beloved pets at PetSet</h5>
                                    <button href="/" className="btn btn-lg btn-primary mt-3 mt-md-4" style={{marginRight:'10px'}}>Book Now</button>
                                    <button href="/" className="btn btn-lg btn-secondary mt-3 mt-md-4" >Learn More</button>
                                </div>
                            </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-primary rounded" style={{width:'45px', height:'45px'}}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-primary rounded" style={{width:'45px', height:'45px'}}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HomeCarousel