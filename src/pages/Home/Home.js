import React from 'react'
import './Home.css'
import HomeCarousel from '../../components/Home/HomeCarousel'
import AboutUs from '../../components/Home/AboutUs'
import OurFeatures from '../../components/Home/OurFeatures'
import PopularSpecialist from '../../components/Home/PopularSpecialist'
import MemoryHigh from '../../components/Home/MemoryHigh'

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <AboutUs />
            <hr />
            <OurFeatures />
            <PopularSpecialist />
            <MemoryHigh />
        </div>
    )
}

export default Home