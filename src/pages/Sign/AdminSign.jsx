import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const AdminSign = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
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
                else {
                    signOut(auth);
                    navigate("/")
                    toast.error('UnAuthorized Access')
                }
            })
    }

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(data => {
                const email = data.user.email;
                if (data.user) {
                    fetch(`http://localhost:5000/admin/${email}`, {
                        method: 'GET',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.admin === true) {
                                navigate("/")
                            }
                            else {
                                signOut(auth);
                                navigate("/")
                                toast.error('UnAuthorized Access')
                            }
                        })
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

                    <div className="divider">OR</div>

                    <button onClick={handleGoogleSign} className='flex justify-center items-center border-2 rounded-lg py-2 border-blue-400 hover:border-blue-600 cursor-pointer'>
                        <div className="flex justify-center items-center w-3/4 max-w-xs rounded submit-button">
                            <img className='w-5 h-5 m-0' src="https://i.ibb.co/vcHZKPm/google-logo.png" alt="google_logo" />
                            <span className='mx-2 text-slate-500 font-bold'><small>CONTINUE WITH GOOGLE</small></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSign;