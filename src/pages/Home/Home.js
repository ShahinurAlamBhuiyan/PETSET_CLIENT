import React from 'react'
import './Home.css'
import HomeCarousel from '../../components/Home/HomeCarousel'
import AboutUs from '../../components/Home/AboutUs'

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <AboutUs />
        </div>
    )
}

export default Home