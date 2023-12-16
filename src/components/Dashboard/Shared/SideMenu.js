import React, { useContext, useEffect, useState } from 'react';
import './SideMenu.css';
import full_logo from '../../../assets/petsetlogo.png';
import only_logo from '../../../assets/onlylogo.png';
import MenuItem from './MenuItem';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



const menuItems = [
    {
        name: "Users", exact: true, to: "/users", iconClassName: 'bi bi-people-fill', role: 'admin'
    },
    {
        name: "Services", exact: true, to: "/dservices", iconClassName: 'bi bi-vector-pen', role: 'admin',
        subMenus:
            [
                { name: "Add Service", exact: true, to: "/add_service", iconClassName: 'bi bi-plus-circle' },
            ]
    },
    {
        name: "Products", exact: true, to: "/products", iconClassName: 'bi bi-shop', role: 'admin',
        subMenus:
            [
                { name: "Add Product", exact: true, to: "/add_product", iconClassName: 'bi bi-plus-circle' },
            ]
    },
    {
        name: "Doctors", exact: true, to: "/doctors", iconClassName: 'bi bi-file-plus', role: 'admin',
        subMenus:
            [
                { name: "Add Doctor", exact: true, to: "/add_doctor", iconClassName: 'bi bi-plus-circle' },
            ]
    },
    {
        name: "Posts", exact: true, to: "/posts", iconClassName: 'bi bi-file-earmark-post', role: 'all',
        subMenus:
            [
                { name: "Memories", to: '/posts/memories', iconClassName: 'bi bi-emoji-laughing' },
                { name: "Adoption", to: '/posts/adoptions', iconClassName: 'bi bi-star-fill' },
            ]
    },
    {
        name: "Orders", exact: true, to: "/orders", iconClassName: 'bi bi-bag-fill', role: 'all'
    },
    {
        name: "Appointments", exact: true, to: "/appointments", iconClassName: 'bi bi-box-seam', role: 'all'
    },
];

const SideMenu = (props) => {
    const navigate = useNavigate()
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext)
    const [inactive, setInactive] = useState(false);


    useEffect(() => {
        if (inactive) {
            document.querySelectorAll(".sub-menu").forEach(el => {
                el.classList.remove('active');
            })
        }

        props.onCollapse(inactive);

    }, [inactive])

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setLoggedInUser({});
        navigate('/')
    }

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <Link to={'/'} className="logo">
                    <img src={inactive ? only_logo : full_logo} alt="circle" />
                </Link>

                <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
                    <i className={`bi ${inactive ? 'bi-arrow-right-square-fill' : 'bi-arrow-left-square-fill'}`}></i>
                </div>
            </div>
            <div className="search-controller">
                <div>
                    <button className="search-btn">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
                <input type="text" placeholder="search.." />
            </div>

            <div className="divider"></div>

            <div className="main-menu">
                <ul style={{ margin: '0', padding: '0' }}>
                    {menuItems &&
                        menuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                role={menuItem.role}
                                to={menuItem.to}
                                exact={menuItem.exact}
                                iconClassName={menuItem.iconClassName}
                                subMenus={menuItem.subMenus || []}
                                onClick={() => {
                                    if (inactive) {
                                        setInactive(false);
                                    }
                                }}
                            />
                        ))
                    }
                </ul>
            </div>
            <div className='centering_items_flex' style={{ justifyContent: 'flex-end' }}>
                <FontAwesomeIcon onClick={handleLogout} size='lg' title='Logout' style={{ cursor: 'pointer' }} color='gray' icon={faRightFromBracket} />
            </div>
            {/* <button href="/sign-in" onClick={handleLogout} className="btn btn-outline-primary  mt-3">Logout </button> */}
            <Link to={'/profile'} className="side-menu-footer">
                <div className='avatar'>
                    <img src={loggedInUser.image_URL ? loggedInUser.image_URL : only_logo} alt="user" />
                </div>
                <div className="user-info">
                    <h5>{loggedInUser.full_name}</h5>
                    <p>{loggedInUser.email}</p>
                </div>
            </Link>
        </div>
    );
};

export default SideMenu;