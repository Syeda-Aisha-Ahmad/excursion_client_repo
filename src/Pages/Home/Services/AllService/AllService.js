import React from 'react';
import { FaBeer, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const AllService = () => {
    return (
        <div className='my-10 text-center' data-aos="fade-up">
            <h1 className='text-4xl text-black'>Services</h1>
            <Service></Service>
            <div className=''>
                <Link to={'/services'}>
                    <button className="btn btn-ghost text-base text-black">See All<FaArrowRight className='ml-2 text-base' /></button>
                </Link>
            </div>
        </div>
    );
}

export default AllService;