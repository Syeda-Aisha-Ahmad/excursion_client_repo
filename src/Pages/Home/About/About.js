import React from 'react';
import aboutImg from '../../../Assets/Images/about.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white" data-aos="fade-up">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2 mx-auto'>
                        <img alt='' src={aboutImg} className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 mx-auto'>
                        <h1 className="text-5xl font-bold">Why to Choose Us?</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;