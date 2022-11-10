import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Register = () => {

    const { googleSignIn, createUser } = useContext(AuthContext)

    //Register
    const registerForm = (event) => {
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // form.reset()
            })
            .catch(error => {
                console.error(error)
            })


    }

    // const userCreateHandler = (email, password) => {
    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }

    //Google Login
    const googleHandler = () => {
        googleSignIn()
            .then((result => {
                const user = result.user;
            }))
            .catch(error => {
                console.error(error)
            })
    }

    //Title
    useTitle('Register')

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 py-10" style={{ backgroundImage: `url("https://images.hdqwalls.com/wallpapers/airplane-wings.jpg")` }}>
                <div className="hero-content ">
                    <div className="card w-full max-w-sm bg-opacity-60 shadow-2xl bg-base-100">
                        <form onSubmit={registerForm}>
                            <div className="card-body px-16 ">
                                <h1 className="text-4xl font-bold text-center mb-5">Register Now!</h1>

                                {/* Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='your-name' type="text" placeholder="Name" className="input input-bordered w-full rounded-xl" />
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered w-full rounded-xl" />
                                </div>

                                {/* Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full rounded-xl" />
                                </div>

                                {/* Confirm Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input name='confirm' type="password" placeholder="Confirm Password" className="input input-bordered rounded-xl" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-blue-500 text-white border-none rounded-xl">Register</button>
                                    <p className='text-center text-slate-700 font-bold my-3'>or</p>
                                    <button onClick={googleHandler} className="btn btn-outline border-solid border-blue-500 text-slate-800 rounded-xl">Sign In with Google</button>
                                </div>
                                <p>Already have an account? please <Link className='font-bold link text-blue-700' to={'/login'}>Log In</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;