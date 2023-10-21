import React from 'react';

const Banner = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat h-screen' style={{ backgroundImage: `url(https://i.ibb.co/1ftZp94/C.jpg)` }}>
            <div className='section-container flex flex-col justify-center bg-cover h-screen bg-opacity-30 bg-black'>
                <h1 className='font-semibold md:font-bold lg:font-bold text-5xl md:text-4xl lg:text-6xl text-[#FCD462] ps-3'>Experience <p className='mt-5'>the Elegance of</p><p className='mt-5'>Nature-Inspired Luxury.</p></h1>
                <p className='ps-3 my-5 text-[#FCD462] text-2xl'>Stones Beauty - That Makes Your Home Luxurious.</p>
                <button className='ms-3 btn w-fit bg-[var(--text-primary)] border-0 text-white font-semibold'>Explore More</button>
            </div>
        </div>
    );
};

export default Banner;
