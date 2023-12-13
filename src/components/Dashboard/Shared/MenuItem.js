import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItem.css';
import { AuthContext } from '../../../Providers/AuthProvider';
const MenuItem = ({ name, iconClassName, to, exact, subMenus, role }) => {
  const { loggedInUser } = useContext(AuthContext)
  const [expand, setExpand] = useState(false);
  if (subMenus.name) {
    console.log('first')
  }
  return (
    <li style={{ listStyle: 'none', display:`${(role === loggedInUser.role || role === 'all') ? 'block' : 'none'}` }}>
      <NavLink exact to={to} className='menu-item' onClick={() => setExpand(!expand)}>
        <div className='menu-icon'>
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>
      {
        subMenus && subMenus.length > 0 ?
          (<ul className={`sub-menu ${expand ? 'active' : ''}`}>
            {subMenus.map((menu, index) =>
              <li key={index} style={{ listStyle: 'none' }}>
                <NavLink to={menu.to}>
                  <div className='menu-icon'>
                    <i className={menu.iconClassName}></i>
                    <span>{menu.name}</span>
                  </div>
                </NavLink>
              </li>
            )
            }</ul>
          ) : null

      }
    </li>
  );
};

export default MenuItem;