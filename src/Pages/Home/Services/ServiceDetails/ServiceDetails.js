import React from 'react';
import img from '../../../../Assets/Images/banners2.jpg'

const ServiceDetails = () => {
    return (
        <div>
            <section id='service-details'>
                <h1 className='text-4xl my-5 text-center '> This is a service details page</h1>
                <img src={img} alt="" className='mx-auto mt-8' />
                <p className='text-center text-slate-600'>This is an Image</p>

                <div className='text-justify w-10/12 mx-auto'>
                    <h1 className='text-4xl my-5'>Let's know more about service</h1>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et modi suscipit mollitia quam molestias? Eum nostrum quae molestias nisi distinctio ipsa corporis aliquam, ipsam minus dignissimos et veritatis in, nam unde voluptas ducimus totam tenetur nesciunt accusantium est commodi pariatur architecto? Eveniet neque praesentium velit tempora distinctio et rerum qui adipisci necessitatibus recusandae? Reprehenderit doloremque dolorem sint fugiat rem culpa saepe adipisci optio natus officia placeat cupiditate, repellat dolore et voluptatem odit dicta accusantium! Odit animi modi quia cum consequuntur reprehenderit eaque nostrum ipsam repellendus doloribus suscipit, nulla totam, saepe beatae iure quaerat inventore nesciunt dolore corporis? Perspiciatis, molestiae architecto? Nobis omnis totam corrupti qui provident ratione quos quam minus, iusto sapiente iste excepturi ea tempora laboriosam repellendus dolor, fuga fugit recusandae! Totam illum excepturi corporis odit necessitatibus est eveniet nesciunt deleniti beatae, at fugiat ipsam adipisci, voluptatem officia sequi delectus asperiores fugit doloremque obcaecati sapiente dolorum? Necessitatibus laborum repellat eius dolore! Cum aliquid vel at iste esse eum error necessitatibus, voluptates, commodi asperiores nemo ipsa, voluptatem modi placeat. Impedit eum minus odit earum iusto illum corrupti porro dolorum similique sint ipsum error cum illo, exercitationem nisi expedita deserunt? Inventore aut adipisci, fugit eaque nesciunt quidem voluptatum dicta similique minus.</p>
                    <br />
                    <br />
                    <p className='font-bold text-2xl'>Service Price: $900</p>

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

            <section id="review-section" data-aos="fade">
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
                        <button className="inline-block collapse-title bg-blue-500 text-white text-center peer-checked:bg-blue-600 peer-checked:text-white font-bold text-xl px-1 my-10 w-2/12 mx-auto rounded-xl">
                            Add Review
                        </button>



                        <div className="collapse-content bg-none text-primary-content peer-checked:bg-blue-100 peer-checked:text-secondary-content " >
                            <form action="">
                                <h3 className='text-3xl font-bold text-blue-900 my-10'>Your Review</h3>
                                <input type="text" placeholder="Your name" className="input input-bordered w-1/2 rounded-xl mb-5" />
                                <input type="text" placeholder="Your Email" className="input input-bordered w-1/2 rounded-xl mb-5" />
                                <textarea className="textarea textarea-bordered w-full rounded-xl" placeholder="Review"></textarea>
                                <button className='btn bg-blue-500 text-white border-none rounded-xl px-10'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;