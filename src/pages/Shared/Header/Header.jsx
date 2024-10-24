import React from 'react';
import './Header.css'
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='header_container'>
            <div className='header_left'>
                {/* <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li className='lg:mx-6 text-black'>home</li>
                        <li className='lg:mx-6 text-black'>about</li>
                        <li className='lg:mx-6 text-black'>services</li>

                    </ul>
                </div> */}
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
                <div className='header_right_sign'>
                    <p className='text-2xl mx-2'><VscAccount /></p>
                    <Link className='font-bold' to='sign'><small>Sign In</small></Link>
                    <div className="register_btn w-0.5 h-4 bg-white rounded-xl mx-4"></div>
                    <Link className='font-bold register_btn' to='register'><small>Register</small></Link>
                </div>

                <div>
                    <div className="w-px h-12 bg-white rounded-xl mx-4"></div>
                </div>

                <div className='header_right_cart'>
                    <Link to='cart'>
                        <div className='flex'>
                            <div className='bg-blue-400 p-3 rounded-full relative'>
                                <p className='text-3xl'><BsCart /></p>
                                <p className='w-4 h-4 font-bold bg-blue-200 text-black rounded-full p-2 flex justify-center items-center absolute top-0 right-0'>0</p>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

        </header>
    );
};

export default Header;