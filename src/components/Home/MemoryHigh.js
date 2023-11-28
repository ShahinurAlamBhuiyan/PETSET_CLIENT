import React from 'react'

import memory1 from '../../assets/Memories/memory-1.jpg'
import memory2 from '../../assets/Memories/memory-2.jpg'
import memory3 from '../../assets/Memories/memory-3.jpg'

const MemoryHigh = () => {
    return (

        <div className="container pt-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-secondary mb-3">Today's Highlights.</h4>
                <h1 className="display-4 m-0"><span className="text-primary">Memories</span> Highlights From User</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 mb-4">
                    <div className="card border-0 mb-2">
                        <img className="card-img-top" src={memory1} alt="" />
                            <div className="card-body bg-light p-4">
                                <h4 className="card-title text-truncate">Paw-some Playdates!</h4>
                                <div className="d-flex mb-3">
                                    <small className="mr-2"><i className="fa fa-user text-muted"></i> Admin</small>
                                    <small className="mr-2"><i className="fa fa-folder text-muted"></i> Web Design</small>
                                    <small className="mr-2"><i className="fa fa-comments text-muted"></i> 15</small>
                                </div>
                                <p>Capture the joy as your furry friends make new pals and create lasting memories during our supervised playdates at PetSet. Share the laughter, the games, and the paw-some friendships that make every visit unforgettable.</p>
                                <a className="font-weight-bold" href="/">Read More</a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-0 mb-2">
                        <img className="card-img-top" src={memory2} alt="" />
                            <div className="card-body bg-light p-4">
                                <h4 className="card-title text-truncate">Glamour Shots for Furry Stars</h4>
                                <div className="d-flex mb-3">
                                    <small className="mr-2"><i className="fa fa-user text-muted"></i> Admin</small>
                                    <small className="mr-2"><i className="fa fa-folder text-muted"></i> Web Design</small>
                                    <small className="mr-2"><i className="fa fa-comments text-muted"></i> 15</small>
                                </div>
                                <p>Experience the magic of our professional pet photography sessions, capturing the charm and charisma of your beloved companions. From candid moments to posed portraits, let the snapshots tell the tail of a day filled with love and laughter.</p>
                                <a className="font-weight-bold" href="/">Read More</a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-0 mb-2">
                        <img className="card-img-top" src={memory3} alt="" />
                            <div className="card-body bg-light p-4">
                                <h4 className="card-title text-truncate">Wellness Wags</h4>
                                <div className="d-flex mb-3">
                                    <small className="mr-2"><i className="fa fa-user text-muted"></i> Admin</small>
                                    <small className="mr-2"><i className="fa fa-folder text-muted"></i> Web Design</small>
                                    <small className="mr-2"><i className="fa fa-comments text-muted"></i> 15</small>
                                </div>
                                <p>Celebrate the health and happiness of your pets with our wellness updates. From playful antics to moments of relaxation, our daily highlights showcase the well-rounded care and joyful experiences that define life at PetSet.</p>
                                <a className="font-weight-bold" href="/">Read More</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemoryHigh