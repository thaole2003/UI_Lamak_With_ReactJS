import React from 'react'
import NavBar from '../components/navBar'
import Anmouncement from '../components/Anmouncement'
import Slider from '../components/slider'
import Categories from '../components/Categories'
import Products from '../components/products'
import Newsleter from '../components/newsleter'
import Footer from '../components/footer'

const Home = () => {
    return (
        <>
            <Anmouncement />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <Newsleter />
            <Footer />
        </>
    )
}

export default Home