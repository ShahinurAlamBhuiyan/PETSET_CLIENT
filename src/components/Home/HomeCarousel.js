import React from 'react'

import Carousel1 from '../../assets/Carousel/carousel-1.jpg'
import Carousel2 from '../../assets/Carousel/carousel-2.jpg'

const HomeCarousel = () => {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={Carousel1} alt="Keep Your Pet Happy" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h3 className="text-white mb-3 d-none d-sm-block">A social media for Pet <span className="text-secondary">Lovers</span></h3>
                                <h1 className="display-3 text-white mb-3">Be Happy With Your <span className="text-primary">Pet</span></h1>
                                <h5 className="text-white mb-3 d-none d-sm-block">Share Memories, Post for Adoption, Search for your Lost Pet and So on</h5>
                                <a href="/memories" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4" style={{ marginRight: '10px' }}>Post Memories</a>
                                <a href="/adaptation" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Post for Adoption</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src={Carousel2} alt="Best Pet Services" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h3 className="text-white mb-3 d-none d-sm-block">Best Pet <span className="text-primary">Services</span> and <span className="text-primary">Store</span></h3>
                                <h1 className="display-3 text-white mb-3">Book <span className="text-secondary">Specialists</span> and Buy Pet <span className="text-primary">Goods</span></h1>
                                <h5 className="text-white mb-3 d-none d-sm-block">This is a Place for Your Beloved Pets' Health Care and Buying Foods and Gifting Goods</h5>
                                <a href="/services" className="btn btn-lg btn-primary mt-3 mt-md-4" style={{ marginRight: '10px' }}>Get Services</a>
                                <a href="/store" className="btn btn-lg btn-secondary mt-3 mt-md-4" >Buy from Store</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-primary rounded" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-primary rounded" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HomeCarousel