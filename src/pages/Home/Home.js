import React from 'react'
import './Home.css'
import HomeCarousel from '../../components/Home/HomeCarousel'
import AboutUs from '../../components/Home/AboutUs'
import OurFeatures from '../../components/Home/OurFeatures'

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <AboutUs />
            <hr />
            <OurFeatures />
        </div>
    )
}

export default Home