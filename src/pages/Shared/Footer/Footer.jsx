import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer_container'>
            <section className='footer_main text-white'>
                <div className='footer_single_div'>
                    <div>
                        <h1 className='text-4xl'>PeakyOnline</h1>
                        <p className='mt-4'>Largest product search engine,</p>
                        <p>maximum categorized online shopping mall</p>
                        <p>and quickest home delivery system.</p>
                        <div className='flex items-center'>
                            <h3 className='text-xl'>Follow Us</h3>
                            <p className='text-2xl mx-3'><AiOutlineFacebook /></p>
                            <p className='text-2xl'><FaInstagram /></p>
                        </div>
                    </div>
                </div>

                <div className='footer_single_div'>
                    <div>
                        <h3 className='text-xl font-bold'>Contact us</h3>
                        <p className='mt-4'>Raipura </p>
                        <p>Narsingdi, Dhaka</p>
                        <p className='flex'><span className='mr-1'>Email:</span> <span>peakyonline@gmail.com</span></p>

                    </div>
                </div>

                <div className='footer_single_div'>
                    <div>
                        <h3 className='text-xl font-bold'>Let Us Help You</h3>
                        <p className='mt-4'><a href="dashboard">Your Account</a></p>
                        <p><a href="dashboard/my_orders">Your Order</a></p>
                        <p><a href="aaa">Terms & Conditions</a></p>
                        <p><a href="aaa">FAQ</a></p>

                    </div>
                </div>

            </section>

            <section className='footer_reserved'>
                <p>© {currentYear} peakyonline.com | All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;