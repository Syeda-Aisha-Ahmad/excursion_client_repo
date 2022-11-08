import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const Register = () => {
    //Title
    useTitle('Register')
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 py-10" style={{ backgroundImage: `url("https://images.hdqwalls.com/wallpapers/airplane-wings.jpg")` }}>
                <div className="hero-content ">
                    <div className="card w-full max-w-sm bg-opacity-60 shadow-2xl bg-base-100">
                        <div className="card-body px-16 ">
                            <h1 className="text-4xl font-bold text-center mb-5">Register Now!</h1>

                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered w-full rounded-xl" />
                            </div>

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered w-full rounded-xl" />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered w-full rounded-xl" />
                            </div>

                            {/* Confirm Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" className="input input-bordered rounded-xl" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-xl">Register</button>
                            </div>
                            <p>Already have an account? please <Link className='font-bold' to={'/login'}>Log In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;