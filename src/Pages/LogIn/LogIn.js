import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const LogIn = () => {
    const { googleSignIn, user } = useContext(AuthContext);

    //GOOGLE LOGIN
    const googleHandler = () => {
        googleSignIn()
            .then(result => {
                const users = result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }



    //Title
    useTitle('Login')
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://pbs.twimg.com/media/Eco6w0EUwAAPqz_.jpg:large")` }}>
                <div className="hero-content ">
                    <div className="card flex-shrink-0 w-full max-w-sm bg-opacity-60 shadow-2xl bg-base-100">
                        <div className="card-body px-16 ">
                            <h1 className="text-5xl font-bold text-center mb-5">Login now! </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered w-full rounded-xl" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered rounded-xl" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-500 text-white border-none rounded-xl">Login</button>
                                <p className='text-center text-slate-700 font-bold my-3'>or</p>
                                <button onClick={googleHandler} className="btn btn-outline border-solid border-blue-500 text-slate-800 rounded-xl">Sign In with Google</button>
                            </div>
                            <p>Don't have an account? please <Link className='font-bold link text-blue-700' to={'/register'}>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;