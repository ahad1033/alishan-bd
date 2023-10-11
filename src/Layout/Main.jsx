import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import OurProducts from '../Components/OurProducts/OurProducts';
import Banner from '../Components/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <OurProducts />
        </div>
    );
};

export default Main;