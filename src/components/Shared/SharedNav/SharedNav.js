import React from 'react'
import { Link } from 'react-router-dom';

import './SharedNav.css'
import Topbar from './Topbar'

const SharedNav = () => {
    return (
        <>
            <Topbar />
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                    <a href="/" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-5 text-capitalize font-italic text-white"><span className="text-primary">Safety</span>First</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <a href="about.html" className="nav-item nav-link">Memories</a>
                            <a href="about.html" className="nav-item nav-link">Adaptation</a>
                            <a href="service.html" className="nav-item nav-link">Lost & Found</a>
                            <a href="price.html" className="nav-item nav-link">Specialist</a>
                            <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Store</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="blog.html" className="dropdown-item">Medicine</a>
                                    <a href="single.html" className="dropdown-item">Toy</a>
                                </div>
                            </div>
                        </div>
                        <Link to="/login" className="btn btn-lg btn-primary px-3 d-none d-lg-block">Login</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SharedNav

