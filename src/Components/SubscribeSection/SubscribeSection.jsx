import React from 'react';

const SubscribeSection = () => {
    return (
        <div className='section-container py-11 flex gap-20justify-between bg-black'>
            <div className='w-1/3'>
                <h1 className='mb-4 text-5xl text-white font-bold'>Alishan</h1>
                <p className='mb-5 text-white  text-xl'>Register here to get daily updates.</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email" className="input input-bordered" />
                        <button className="btn">
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex w-2/3 text-white gap-10 items-center mx-auto'>
                <div className='flex justify-between w-full  gap-10'>
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