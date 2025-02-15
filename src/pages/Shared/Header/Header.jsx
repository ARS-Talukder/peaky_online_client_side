import React from 'react';
import './Header.css'
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading';
import { BsCart } from "react-icons/bs";
import { signOut } from 'firebase/auth';
import { useCart } from '../../ContextReducer';
import useAdmin from '../../hooks/useAdmin';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate();
    const data = useCart();

    if (loading || adminLoading) {
        <Loading></Loading>
    }

    const handleSignOut = () => {
        signOut(auth);
    };
    const signOutConfirmation = () => {
        const proceed = window.confirm("Signing Out");
        if (proceed) {
            handleSignOut();
            navigate('/');
        }
        else {
            return;
        }

    }
    return (
        <header className='header_container'>
            <div className='header_left'>
                <Link to='/'><img src="https://i.ibb.co.com/hKqYrrP/Peaky-online-logo.png" alt="logo" width={80} /></Link>
            </div>

            <div className='header_center'>
                <label className="input input-bordered flex items-center gap-2 w-full text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow text-black" placeholder="Search here..." />
                </label>
            </div>

            <div className='header_right'>
                {
                    user ? (admin ?
                        <div className='header_right_sign'>
                            <button className='btn btn-active border-0 btn-xs lg:btn-sm md:btn-sm bg-red-600 hover:bg-red-800 font-bold mr-3 lg:mr-0 md:mr-0' onClick={signOutConfirmation}><small>Sign Out</small></button>
                            <div className="register_btn w-0.5 h-4 bg-white rounded-xl mx-4"></div>
                            <Link className='btn btn-xs lg:btn-sm md:btn-sm btn-accent font-bold text-white' to='admin_dashboard'><small>Admin</small></Link>
                        </div>

                        :

                        <div className='header_right_sign'>
                            <button className='btn btn-active border-0 btn-xs lg:btn-sm md:btn-sm bg-red-600 hover:bg-red-800 font-bold mr-3 lg:mr-0 md:mr-0' onClick={signOutConfirmation}><small>Sign Out</small></button>
                            <div className="register_btn w-0.5 h-4 bg-white rounded-xl mx-4"></div>
                            <div className="avatar w-10">
                                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/ctFS6Qt/login-Avatar.png" alt="login avatar" />
                                </div>
                            </div>
                        </div>)
                        :
                        <div className='header_right_sign'>
                            <p className='text-2xl mx-2'><VscAccount /></p>
                            <Link className='font-bold' to='sign'><small>Sign In</small></Link>
                            <div className="register_btn w-0.5 h-4 bg-white rounded-xl mx-4"></div>
                            <Link className='font-bold register_btn' to='register'><small>Register</small></Link>
                        </div>


                }


                <div>
                    <div className="w-px h-12 bg-white rounded-xl mx-2"></div>
                </div>

                <div className='header_right_cart'>
                    <Link to='cart'>
                        <div className='flex'>
                            <div className='bg-blue-400 p-3 rounded-full relative'>
                                <p className='text-3xl'><BsCart /></p>
                                <p className='w-4 h-4 font-bold bg-blue-200 text-black rounded-full p-2 flex justify-center items-center absolute top-0 right-0'>{data.length}</p>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

        </header>
    );
};

export default Header;