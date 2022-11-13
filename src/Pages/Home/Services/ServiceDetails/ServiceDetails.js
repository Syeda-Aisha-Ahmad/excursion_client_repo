import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import useTitle from '../../../../Hooks/useTitle';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);
    // console.log(user)

    const reviewHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.user.value;
        const photoUrl = form.photourl.value;
        const reviewText = form.review.value;

        const reviewData = {
            userName,
            photoUrl,
            reviewText
        }
        fetch('https://assignment-server-11-nu.vercel.app/allreviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    //Title
    useTitle('Details')

    const serviceDetails = useLoaderData();
    const { _id, name, image, description, price } = serviceDetails;
    return (
        <div>
            <section id='service-details'>
                <h1 className='text-4xl my-5 text-center '> {name}</h1>
                <img src={image} alt="" className='mx-auto mt-8' />
                <p className='text-center text-slate-600'>{name}</p>

                <div className='text-justify w-10/12 mx-auto'>
                    <h1 className='text-4xl my-5'>Let's know more about service</h1>
                    <p className='text-xl'>{description}</p>
                    <br />
                    <br />
                    <p className='font-bold text-2xl'>Service Price: {price}</p>

                    <div className='my-10 '>
                        <h3 className='font-bold text-4xl '>Ratings</h3>
                        <div className="rating rating-lg rating-half mt-5">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" className="bg-blue-400 mask mask-star-2 mask-half-2" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="review-section">
                <h1 className='text-4xl my-5 text-center '> Service Reviews</h1>
                <div className="card lg:card-side shadow-xl bg-blue-100 w-9/12 mx-auto p-5 border-solid border-2 border-blue-200">
                    <figure><img alt='' className="mask mask-circle" src="https://placeimg.com/160/160/arch" /></figure>
                    <div className="card-body">
                        <h1 className='text-3xl font-bold card-title'>Service Reviews</h1>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                    </div>
                </div>

                <div>
                    <div className="collapse" >
                        <input type="checkbox" className="peer" />

                        {
                            user?.uid ?
                                <button className=" inline-block collapse-title bg-blue-500 text-white text-center peer-checked:bg-blue-600 peer-checked:text-white font-bold text-xl px-1 my-10 w-2/12 mx-auto rounded-xl">
                                    Add Review
                                </button>
                                :
                                <button className="inline-block collapse-title bg-blue-500 text-white text-center peer-checked:bg-blue-600 peer-checked:text-white font-bold text-xl px-1 my-10 w-2/12 mx-auto rounded-xl">
                                    Add Review
                                </button>
                        }

                        <div className='text-center'>
                            {
                                user?.uid ? < p className='hidden'>You have to Login to add reviews.. Please Login</p>
                                    :
                                    <p className='text-base'>You have to Login to add reviews.. Please <Link to={'/login'} className="text-blue-700 underline">Login</Link></p>
                            }

                        </div>


                        {
                            user?.uid ?
                                <div className=" collapse-content bg-none text-primary-content peer-checked:bg-blue-100 peer-checked:text-secondary-content " >
                                    <form onSubmit={reviewHandler}>
                                        <h3 className='text-3xl font-bold text-blue-900 my-10'>Your Review</h3>
                                        <input name='user' type="text" placeholder="Your name" className="input input-bordered w-1/2 rounded-xl mb-5" />
                                        <input name='photourl' type="text" placeholder="photo url" className="input input-bordered w-1/2 rounded-xl mb-5" />
                                        <textarea name='review' placeholder="Review....." className="textarea textarea-bordered w-full rounded-xl"></textarea>
                                        <button className='btn bg-blue-500 text-white border-none rounded-xl px-10'>Submit</button>
                                    </form>
                                </div>
                                :
                                <div className='hidden'></div>
                        }
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ServiceDetails;