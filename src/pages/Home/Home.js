import React from 'react'
import './Home.css'
import HomeCarousel from '../../components/Home/HomeCarousel'
import AboutUs from '../../components/Home/AboutUs'
import WhyChooseUs from '../../components/Home/WhyChooseUs'
import PopularSpecialist from '../../components/Home/PopularSpecialist'
import MemoryHigh from '../../components/Home/MemoryHigh'

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <AboutUs />
            
            <WhyChooseUs />
            <PopularSpecialist />
            <MemoryHigh />
        </div>
    )
}

export default Home