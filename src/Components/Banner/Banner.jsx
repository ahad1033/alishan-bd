import React from 'react';

const Banner = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat h-screen' style={{ backgroundImage: `url(https://i.ibb.co/1ftZp94/C.jpg)` }}>
            <div className='section-container flex flex-col justify-center bg-cover h-screen bg-opacity-30 bg-black'>
                <h1 className='font-bold text-6xl text-[#FCD462] '>Experience <p className='mt-5'>the Elegance of</p><p className='mt-5'>Nature-Inspired Luxury.</p></h1>
                <p className='my-5 text-[#FCD462] text-2xl'>Stones Beauty - That Makes Your Home Luxurious.</p>
                <button className='btn w-fit bg-[var(--text-primary)] border-0  text-white font-semibold'>Explore More</button>
            </div>
        </div>
    );
};

export default Banner;
