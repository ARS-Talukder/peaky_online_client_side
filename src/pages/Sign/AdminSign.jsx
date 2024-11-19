import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const AdminSign = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    let signInError;

    if (error) {
        signInError = <p className='text-red-500 font-bold'><small>{error?.message}</small></p>
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.admin === true) {
                    signInWithEmailAndPassword(email, password);
                    navigate("/")
                }
            })
    }
    return (
        <div className='flex justify-center items-center mt-6 pt-8 pb-16 px-4'>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-slate-500 font-bold my-2">Admin Login</h2>
                    <form onSubmit={handleSignIn} action="">
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

                        {signInError}

                        <input className='btn w-full max-w-xs mt-4 text-white bg-blue-500 hover:bg-blue-600' type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminSign;