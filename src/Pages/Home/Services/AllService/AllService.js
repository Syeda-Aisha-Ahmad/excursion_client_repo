import React from 'react';
import { FaBeer, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const AllService = () => {
    return (
        <div className='mt-32 text-center' data-aos="fade-up">
            <h1 className='text-4xl text-black'>Our <span className='text-blue-500'>Services</span></h1>
            <Service></Service>
            <div className='mb-28'>
                <Link to={'/services'}>
                    <button className="btn btn-ghost text-base text-black">See All<FaArrowRight className='ml-2 text-base' /></button>
                </Link>
            </div>
        </div>
    );
}

export default AllService;