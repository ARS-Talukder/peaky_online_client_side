import React from 'react';
import { Link } from 'react-router-dom';

const Sign = () => {
    return (
        <div className='flex justify-center items-center pt-8 pb-16 px-4'>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-slate-500 font-bold my-2">Hi, Welcome Back</h2>
                    <form action="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" required />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />

                        </div>
                        <input className='btn w-full max-w-xs mt-4 text-white bg-blue-500 hover:bg-blue-600' type="submit" value="Login" />
                    </form>

                    <p className='text-slate-500'>
                        <small>
                            <span className='underline'>New to PeakyOnline?</span>
                            <Link className="text-primary" to="/register"> Create an account</Link>
                        </small>
                    </p>

                    <div className="divider">OR</div>

                    <div className='flex justify-center items-center border-2 rounded-lg py-2 border-blue-400 hover:border-blue-600 cursor-pointer'>
                        <button className="flex justify-center items-center w-3/4 max-w-xs rounded submit-button">
                            <img className='w-5 h-5 m-0' src="https://i.ibb.co/vcHZKPm/google-logo.png" alt="google_logo" />
                            <span className='mx-2 text-slate-500 font-bold'><small>CONTINUE WITH GOOGLE</small></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign;