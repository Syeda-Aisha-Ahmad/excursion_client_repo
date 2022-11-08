import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';

const Service = () => {
    //Title
    useTitle('Services')
    return (
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-1 w-fit mx-auto my-10 text-left' >
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link to={'services/:id'}><button className="btn bg-blue-400 border-none text-white rounded-2xl">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-blue-400 border-none text-white rounded-2xl">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-blue-400 border-none text-white rounded-2xl">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;