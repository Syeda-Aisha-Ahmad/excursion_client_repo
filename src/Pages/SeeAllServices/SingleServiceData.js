import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleServiceData = ({ data }) => {
    const { _id, price, name, image, description } = data;
    return (
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-1 w-fit mx-auto my-10 text-left' >
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure>

                        <PhotoProvider>
                            <PhotoView src={image} alt="Shoes">
                                <img src={image} alt="Shoes" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        {
                            description.length > 250 ?
                                <p>{description.slice(0, 100) + '...'}<Link to={`/servicesDetails/${_id}`} className="text-blue-700">Read More</Link></p>
                                :
                                <p>{description}</p>
                        }

                        <h4>Price: {price}</h4>
                        <div className="card-actions justify-end">
                            <Link to={`/servicesDetails/${_id}`}><button className="btn bg-blue-400 border-none text-white rounded-2xl">View Details</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleServiceData;