import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import OurProducts from '../Components/OurProducts/OurProducts';
import Banner from '../Components/Banner/Banner';
import SubscribeSection from '../Components/SubscribeSection/SubscribeSection';
import Footer from '../Components/Shared/Footer/Footer';
import Gallary from '../Components/Gallary/Gallary';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <OurProducts />
            <SubscribeSection />
            <Gallary />
            <Footer />
        </div>
    );
};

export default Main;