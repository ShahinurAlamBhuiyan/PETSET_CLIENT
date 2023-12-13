import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItem.css';
const MenuItem = ({ name, iconClassName, to, exact, subMenus }) => {
  const [expand, setExpand] = useState(false);
  if (subMenus.name) {
    console.log('first')
  }
  return (
    <li style={{ listStyle: 'none' }}>
      <NavLink exact to={to} className='menu-item' onClick={() => setExpand(!expand)}>
        <div className='menu-icon'>
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>
      {
        subMenus && subMenus.length > 0 ?
          (<ul className={`sub-menu ${expand ? 'active' : ''}`}>
            {subMenus.map((menu, index) => <li key={index}><NavLink to={menu.to}>{menu.name}</NavLink></li>)
            }</ul>
          ) : null

      }
    </li>
  );
};

export default MenuItem;