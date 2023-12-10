import React, { useContext } from 'react'

import HomeCarousel from '../../components/Home/HomeCarousel'
import AboutUs from '../../components/Home/AboutUs'
import WhyChooseUs from '../../components/Home/WhyChooseUs'
import PopularSpecialist from '../../components/Home/PopularSpecialist'
import MemoryHigh from '../../components/Home/MemoryHigh'
import OurFeatures from '../../components/Home/OurFeatures'
import { AuthContext } from '../../Providers/AuthProvider'

const Home = () => {

    const { loggedInUser } = useContext(AuthContext)
    console.log('shahin', loggedInUser)
    return (
        <div>
            <HomeCarousel />
            <AboutUs />
            <OurFeatures />
            <WhyChooseUs />
            <PopularSpecialist />
            <MemoryHigh />
        </div>
    )
}

export default Home