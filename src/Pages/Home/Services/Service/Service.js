import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import SingleService from '../SingleService/SingleService';
// import { AuthContext } from '../../../../Context/AuthProvider';

const Service = ({ data }) => {
    console.log(data);
    // const services = useLoaderData();
    // console.log(services)

    //Title
    useTitle('Services')
    return (
        <div>

            {
                data.map(service => (<SingleService service={service} />))
            }

            {/* <div className='grid lg:grid-cols-3 grid-cols-1 w-fit mx-auto my-10 text-left' >
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure>

                        <PhotoProvider>
                            <PhotoView src="https://placeimg.com/400/225/arch" alt="Shoes">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                            </PhotoView>
                        </PhotoProvider>



                    </figure>
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
            </div> */}
        </div>
    );
};

export default Service;