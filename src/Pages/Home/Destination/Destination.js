import React from 'react';
import img from '../../../Assets/Images/banner4.jpg'
import bangladesh from '../../../Assets/Images/bangladesh.jpg_large'
import './Destination.css'

const Destination = () => {
    return (
        <div className='my-20'>
            <div className='w-10/12 mx-auto'>
                <h1 className='text-4xl text-center my-10' data-aos="fade-left">Populer <span className='text-blue-500'>Destination</span></h1>
                <div>
                    <div className=''>
                        {/* Bangladesh */}
                        <div className="hero hero-style mb-5" style={{ backgroundImage: `url("https://pbs.twimg.com/media/Eco6w0EUwAAPqz_.jpg:large")` }} data-aos="fade-right">
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-center text-white">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Bangladesh</h1>
                                </div>
                            </div>
                        </div>

                        {/* Japan */}
                        <div className='flex'>
                            <div className="hero hero-style hero-style2" style={{ backgroundImage: `url("https://www.cosmeticsdesign-asia.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/cosmetics/cosmeticsdesign-asia.com/headlines/market-trends/japan-focus-top-stories-on-the-japanese-cosmetics-industry/10440600-1-eng-GB/Japan-focus-Top-stories-on-the-Japanese-cosmetics-industry.jpg")` }} data-aos="fade-right">
                                <div className="hero-overlay bg-opacity-20"></div>
                                <div className="hero-content text-center text-white">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Japan</h1>
                                    </div>
                                </div>
                            </div>

                            {/* Australia */}
                            <div className="hero hero-style hero-style2" style={{ backgroundImage: `url("http://cdn.cnn.com/cnnnext/dam/assets/191011110307-02-australia-beautiful-places.jpg")` }} data-aos="fade-left">
                                <div className="hero-overlay bg-opacity-30"></div>
                                <div className="hero-content text-center text-white">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Australia</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=''>
                        {/* Europe */}
                        <div className="hero hero-style my-5" style={{ backgroundImage: `url("https://assets3.thrillist.com/v1/image/2872299/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg")` }} data-aos="fade-right">
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-white">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Europe</h1>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            {/* Malaysia */}
                            <div className="hero hero-style hero-style2" style={{ backgroundImage: `url("https://globalgrasshopper.com/wp-content/uploads/2014/05/Langkawi-1.jpg")` }} data-aos="fade-right">
                                <div className="hero-overlay bg-opacity-30"></div>
                                <div className="hero-content text-center text-white">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Malaysia</h1>
                                    </div>
                                </div>
                            </div>

                            {/* Spain */}
                            <div className="hero hero-style hero-style2" style={{ backgroundImage: `url("https://www.travelanddestinations.com/wp-content/uploads/2019/06/Seville-Places-to-visit-in-Spain.jpg")` }} data-aos="fade-left">
                                <div className="hero-overlay bg-opacity-30"></div>
                                <div className="hero-content text-center text-white">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Spain</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;