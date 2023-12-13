import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItem.css';
const MenuItem = ({ name,  iconClassName, to, exact }) => {
  const [expand, setExpand] = useState(false);
  return (
    <li style={{ listStyle: 'none' }}>
      <NavLink exact={exact} to={to} className='menu-item'>
        <div className='menu-icon'>
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;