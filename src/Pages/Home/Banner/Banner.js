import React from 'react';
import bannerImg from '../../../Assets/Images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='img-gradient'>
                    <img className='w-full lg:h-full md:h-full h-[400px]' src={bannerImg} alt="" />
                </div>
                <div className='Banner-text'>
                    <h1>Wanna get lost in the beauty of the world?</h1>
                    <p>Let's start the journey with Excursion</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave wave1'><path fill="#ffffff" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,250.7C640,245,800,171,960,149.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    );
};

export default Banner;