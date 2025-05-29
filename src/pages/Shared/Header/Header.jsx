import React, { useState } from 'react';
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
import CartDrawer from '../../Home/Products/Cart/CartDrawer/CartDrawer';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    // Cart Drawer open and close handling
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            {/* Overlay. It creates darker the page when drawer opens */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
                    onClick={() => setIsDrawerOpen(false)}
                ></div>
            )}
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
                    user ?

                        <div className='header_right_sign'>
                            <button className='btn btn-active border-0 btn-xs lg:btn-sm md:btn-sm bg-red-600 hover:bg-red-800 font-bold mr-3 lg:mr-0 md:mr-0' onClick={signOutConfirmation}><small>Sign Out</small></button>
                            <div className="register_btn w-0.5 h-4 bg-white rounded-xl mx-4"></div>
                            <Link className='btn btn-xs lg:btn-sm md:btn-sm btn-accent font-bold text-white' to='dashboard'><small>Dashboard</small></Link>
                        </div>

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
                    <button onClick={() => setIsDrawerOpen(true)}>
                        <div className='flex'>
                            <div className='bg-blue-400 p-3 rounded-full relative'>
                                <p className='text-3xl'><BsCart /></p>
                                <p className='w-4 h-4 font-bold bg-blue-200 text-black rounded-full p-2 flex justify-center items-center absolute top-0 right-0'>{data.length}</p>
                            </div>
                        </div>
                    </button>

                </div>
            </div>

            <CartDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />

        </header>
    );
};

export default Header;