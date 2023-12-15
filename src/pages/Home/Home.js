import React from 'react'

import HomeCarousel from '../../components/Home/HomeCarousel'
import AboutUs from '../../components/Home/AboutUs'
import WhyChooseUs from '../../components/Home/WhyChooseUs'
import PopularSpecialist from '../../components/Home/PopularSpecialist'
import OurFeatures from '../../components/Home/OurFeatures'
import FAQ from '../../components/Home/FAQ'

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <AboutUs />
            <OurFeatures />
            <WhyChooseUs />
            <PopularSpecialist />
            <FAQ />
        </div>
    )
}

export default Home