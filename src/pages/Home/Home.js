import React from 'react'

import HomeCarousel from '../../components/Home/HomeCarousel'
import AboutUs from '../../components/Home/AboutUs'
import WhyChooseUs from '../../components/Home/WhyChooseUs'
import PopularSpecialist from '../../components/Home/PopularSpecialist'
import OurFeatures from '../../components/Home/OurFeatures'

const Home = () => {
    return (
        <>
            <HomeCarousel />
            <AboutUs />
            <OurFeatures />
            <WhyChooseUs />
            <PopularSpecialist />
        </>
    )
}

export default Home