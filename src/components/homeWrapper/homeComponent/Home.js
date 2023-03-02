import React, { useEffect } from 'react'
import Footer from '../../footerWrapper/Footer'
import HomeNavigation from '../homeNavigationWrapper/HomeNavigation'
import NavBar from '../navbarComponent/NavBar'

const Home = () => {

    useEffect(() => {
        document.title = 'Festivefaux';
    }, []);
    return (
        <>
            <NavBar />
            <HomeNavigation />
            <Footer />
        </>
    )
}

export default Home