import React from 'react';

const SubscribeSection = () => {
    return (
        <div className='section-container py-11 flex flex-col lg:flex-row md:flex-row gap-20 justify-between bg-black'>
            <div className='flex flex-col sm:w-full md:w-1/3 lg:w-1/3 items-center md:items-start lg:items-start gap-5'>
                <h1 className='mb-4 text-5xl text-white font-bold'>Alishan</h1>
                <p className='mb-5 text-white text-lg'>Register here to get daily updates.</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email" className="input input-bordered" />
                        <button className="btn">
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex sm:w-full md:w-2/3 lg:w-2/3 px-5 text-white items-center mx-auto'>
                <div className='flex justify-between w-full gap-3 text-xs md:text-sm lg:text-sm'>
                    <div>
                        <h3 className='font-semibold my-7 uppercase'>Contact Us</h3>
                        <h3 className='font-semibold my-7 uppercase'>Partners</h3>
                    </div>
                    <div className='text-center'>
                        <h3 className='font-semibold my-7 uppercase'>Advertise</h3>
                        <h3 className='font-semibold my-7 uppercase'>Times of Service</h3>
                    </div>
                    <div>
                        <h3 className='font-semibold my-7 uppercase'>Work With Us</h3>
                        <h3 className='font-semibold my-7 uppercase'>Subscription</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;