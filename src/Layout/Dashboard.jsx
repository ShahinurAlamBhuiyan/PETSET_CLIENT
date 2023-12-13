import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './Style.css'

import SideMenu from '../components/Dashboard/Shared/SideMenu'
import Topbar from '../components/Shared/SharedNav/Topbar'

const Dashboard = () => {
  const [inactive, setInactive] = useState(false)
  return (
    <div>
      <SideMenu
        onCollapse={inactive => {
          setInactive(inactive)
        }}
      />
      <div className={`DashboardTop ${inactive ? 'inactive' : ''} `}>
        <Topbar />
      </div>
      <div className={`RightContainer ${inactive ? 'inactive' : ''} `}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
