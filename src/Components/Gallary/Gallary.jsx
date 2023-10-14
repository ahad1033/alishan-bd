import React from 'react';

const Gallary = () => {
    return (
        <div className='section-container grid grid-cols-2 my-10 gap-10'>
            <div className='gap-10 flex flex-col justify-between'>
                <img src="https://i.ibb.co/WHHB1GL/Whats-App-Image-2023-06-11-at-6-49-34-PM.jpg" alt="" />
                <img src="https://i.ibb.co/NxBck0W/Whats-App-Image-2023-06-11-at-6-49-35-PM-1.jpg" alt="" />
                {/* <img src="https://i.ibb.co/VLxD8wf/Whats-App-Image-2023-06-11-at-6-49-39-PM.jpg" alt="" /> */}
            </div>
            <div className=''>
                <img className='' src="https://i.ibb.co/VLxD8wf/Whats-App-Image-2023-06-11-at-6-49-39-PM.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallary;