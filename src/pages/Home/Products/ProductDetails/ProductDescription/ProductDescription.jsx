import React from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const ProductDescription = () => {
    let productAdded = false;
    return (
        <div className='w-1/2'>
            <h2 className='text-3xl font-bold'>Formal Shirt</h2>
            <div className='flex text-2xl font-bold my-2'>
                <p className='flex items-center justify-center font-normal line-through decoration-2 mr-2 text-slate-400'>
                    <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                    <span>1200</span>
                </p>
                <p className='flex justify-center items-center text-blue-700'>
                    <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                    <span>1000</span>
                </p>
            </div>
            <p className='text-xl my-2 font-bold'><small>1 Year Warranty</small></p>

            <div className=''>
                <h3 className='text-xl font-bold my-1'><small>আমাদের প্রোডাক্ট কেন বেস্ট ?</small></h3>

                <ul className='text-slate-500 font-bold px-1'>
                    <li><small><span className='mr-1'>✅</span> ব্যাগ এন্ড বক্স ফ্রি।</small></li>
                    <li><small><span className='mr-1'>✅</span> ব্যাগ এন্ড বক্স ফ্রি।</small></li>
                    <li><small><span className='mr-1'>✅</span> ব্যাগ এন্ড বক্স ফ্রি।</small></li>
                    <li><small><span className='mr-1'>✅</span> ব্যাগ এন্ড বক্স ফ্রি।</small></li>
                    <li><small><span className='mr-1'>✅</span> ব্যাগ এন্ড বক্স ফ্রি।</small></li>
                    <li><small><span className='mr-1'>✅</span> ব্যাগ এন্ড বক্স ফ্রি।</small></li>
                    <li><small><span className='mr-1'>✅</span> ব্যাগ এন্ড বক্স ফ্রি।</small></li>

                </ul>
            </div>

            <div className='flex mt-6 font-bold'>
                {
                    productAdded === false ?
                        <button className='flex justify-center items-center w-full h-9 bg-sky-200 hover:bg-blue-100 text-blue-500 rounded'><span>Add To Cart</span></button>
                        :
                        <button className='flex justify-center items-center w-full h-9 bg-sky-200 text-blue-300 rounded' disabled><span>Added</span></button>
                }
                <button className='flex justify-center items-center w-full h-9 bg-blue-500 hover:bg-blue-600 text-white ml-4 rounded'><span>ORDER NOW</span></button>
            </div>

            <div className='w-full h-0.5 bg-slate-200 my-6'></div>

            <div className='flex'>
                <button className='flex justify-center items-center w-full h-9 bg-green-200 hover:bg-green-600 text-green-600 hover:text-white border border-green-600 rounded'>
                    <span className='mx-1'><small><FaWhatsapp /></small></span>
                    <span>WHATSAPP</span>
                </button>

                <button className='flex justify-center items-center w-full h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 rounded ml-4'>
                    <span className='mx-1'><small><FaPhone /></small></span>
                    <span>01814728277</span>
                </button>
            </div>
        </div>
    );
};

export default ProductDescription;