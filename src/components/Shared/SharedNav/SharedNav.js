import React, { useContext, useState } from 'react'
import logo from '../../../assets/petsetlogo.png'

import './SharedNav.css'
import Topbar from './Topbar'
import { AuthContext } from '../../../Providers/AuthProvider'

const SharedNav = () => {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext)
    const [isCollapseActive, setIsCollapseActive] = useState(false);

    const toggleCollapse = () => {
        setIsCollapseActive(!isCollapseActive);
    };
    const navItemClass = `nav-item${isCollapseActive ? '' : ' ml-auto'}`;
    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setLoggedInUser({});
    }
    return (
        <>
            <Topbar />
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                    <a href="/" className="navbar-brand" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '5px' }}>
                        <img height={50} width={165} src={logo} alt="petSetLogo" />
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-2" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <>
                                <a href="/" className="nav-item nav-link" >Home</a>
                                <a href="/memories" className="nav-item nav-link" >Memories</a>
                                <a href="/adaptation" className="nav-item nav-link" >Adaptation</a>
                                <a href="/lost&found" className="nav-item nav-link" >Lost & Found</a>
                                <a href="/services" className="nav-item nav-link" >Services</a>
                                <a href="/store" className="nav-item nav-link" >Store</a>
                                {/* <div className="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Store</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="/store/medicine" className="dropdown-item">Medicine</a>
                                        <a href="/store/food" className="dropdown-item">Food</a>
                                    </div>
                                </div> */}
                            </>
                            <div className={` ${navItemClass}`}>
                                {loggedInUser.u_id
                                    ? <button onClick={handleLogout} className="btn btn-lg btn-outline-primary px-3 d-lg-block">Log out</button>
                                    : <a href="/sign-in" className="btn btn-lg btn-outline-primary px-3 d-lg-block">Login</a>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SharedNav

