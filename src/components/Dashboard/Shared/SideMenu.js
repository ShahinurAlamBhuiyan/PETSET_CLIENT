import React, { useContext, useEffect, useState } from 'react';
import './SideMenu.css';
import logo from '../../../assets/dashboard/dashUser.png';
// import UserFooter from './UserFooter/UserFooter';
import MenuItem from './MenuItem';
import { AuthContext } from '../../../Providers/AuthProvider';

const menuItems = [
    { name: "Dashboard", exact: true, to: "/dashboard", iconClassName: 'bi bi-speedometer2' },
    {
        name: "Content", exact: true, to: "/content", iconClassName: 'bi bi-newspaper',
    },
    { name: "Design", exact: true, to: "/design", iconClassName: 'bi bi-vector-pen' },
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

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="circle" />
                </div>
                <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
                    {
                        inactive ? <i className="bi bi-arrow-right-square-fill"></i> :
                            <i className="bi bi-arrow-left-square-fill"></i>
                    }
                </div>
            </div>
            <div className="search-controller">
                <div>
                    <button className="search-btn">
                        <i class="bi bi-search"></i>
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
            <div className="side-menu-footer">
                <div className='avatar'>
                    <img src={loggedInUser.image_URL ? loggedInUser.image_URL : logo} alt="user" />
                </div>
                <div className="user-info">
                    <h5>{loggedInUser.full_name}</h5>
                    <p>{loggedInUser.email}</p>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;