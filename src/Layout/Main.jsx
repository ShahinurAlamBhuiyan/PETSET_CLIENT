import React from 'react'
import { Outlet } from 'react-router-dom'
import SharedNav from '../components/Shared/SharedNav/SharedNav'
import Footer from '../components/Shared/Footer/Footer'

const Main = () => {
  return (
    <>
      <SharedNav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main
