import React, { useEffect, useState } from 'react';
import './SideMenu.css';
// import logo from '../../assets/logo/image 9.png';
// import UserFooter from './UserFooter/UserFooter';
import MenuItem from './MenuItem';

const menuItems = [
    { name: "Dashboard", exact: true, to: "/", iconClassName: 'bi bi-speedometer2' },
    {
        name: "Content", exact: true, to: "/content", iconClassName: 'bi bi-newspaper', subMenus: [{ name: "Courses", to: '/content/courses' }, { name: "Videos", to: '/content/videos' },],
    },
    { name: "Design", exact: true, to: "/design", iconClassName: 'bi bi-vector-pen' },
];

const SideMenu = (props) => {
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
                    {/* <img src={logo} alt="circle" /> */}logo
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
                <ul style={{margin:'0', padding:'0'}}>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                to={menuItem.to}
                                exact={menuItem.exact}
                                subMenus={menuItem.subMenus || []}
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
            {/* <UserFooter /> */}
        </div>
    );
};

export default SideMenu;