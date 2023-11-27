import React from 'react'

import './SharedNav.css'

const Topbar = () => {
    return (
        <div className="container-fluid" style={{ color: ' rgb(237, 100,55)' }}>
            <div className="row py-2 px-lg-5" style={{ backgroundColor: ' #ED6436' }}>
                <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-white pr-3" href="/">FAQs</a>
                        <span className="text-white">|</span>
                        <a className="text-white px-3" href="/">Help</a>
                        <span className="text-white">|</span>
                        <a className="text-white pl-3" href="/">Support</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-white px-3" href="/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-white px-3" href="/">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-white px-3" href="/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-white px-3" href="/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-white pl-3" href="/">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar

