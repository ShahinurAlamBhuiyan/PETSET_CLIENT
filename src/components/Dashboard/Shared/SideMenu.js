import React, { useContext, useEffect, useState } from 'react';
import './SideMenu.css';
import logo from '../../../assets/dashboard/dashUser.png';
// import UserFooter from './UserFooter/UserFooter';
import MenuItem from './MenuItem';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';



const menuItems = [
    {
        name: "Users", exact: true, to: "/users", iconClassName: 'bi bi-people-fill',
    },
    {
        name: "Services", exact: true, to: "/dservices", iconClassName: 'bi bi-vector-pen'
    },
    {
        name: "Posts", exact: true, to: "/posts", iconClassName: 'bi bi-file-earmark-post',
        subMenus:
            [
                { name: "Memories", to: '/posts/memories', iconClassName: 'bi bi-emoji-laughing' },
                { name: "Adoption", to: '/posts/adoptions', iconClassName: 'bi bi-star-fill' },
                { name: "Lost & Found", to: '/posts/lost&founds', iconClassName: 'bi bi-star-fill' }
            ]
    },
    {
        name: "Products", exact: true, to: "/products", iconClassName: 'bi bi-shop'
    },
    {
        name: "Orders", exact: true, to: "/orders", iconClassName: 'bi bi-bag-fill'
    },
    {
        name: "Doctors", exact: true, to: "/doctors", iconClassName: 'bi bi-file-plus',
    },
    {
        name: "Appointments", exact: true, to: "/appointments", iconClassName: 'bi bi-box-seam'
    },
    {
        name: "Add Doctor", exact: true, to: "/add_doctor", iconClassName: 'bi bi-plus-circle'
    },
];

const SideMenu = (props) => {
    const { loggedInUser } = useContext(AuthContext)
    const [inactive, setInactive] = useState(false);


    useEffect(() => {
        if (inactive) {
            document.querySelectorAll(".sub-menu").forEach(el => {
                el.classList.remove('active');
            })
        }

        props.onCollapse(inactive);

    }, [inactive])

    console.log(inactive)
    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="circle" />
                </div>
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
            <Link  to={'/profile'} className="side-menu-footer">
                <div className='avatar'>
                    <img src={loggedInUser.image_URL ? loggedInUser.image_URL : logo} alt="user" />
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