import React from 'react';
import Banner from '../Components/Banner/Banner';
import OurProducts from '../Components/OurProducts/OurProducts';
import SubscribeSection from '../Components/SubscribeSection/SubscribeSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurProducts />
            <SubscribeSection />
        </div>
    );
};

export default Home;