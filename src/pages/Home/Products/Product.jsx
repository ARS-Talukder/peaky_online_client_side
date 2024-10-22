import React from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, category, img, price, discount } = product;
    const discount_price = price - ((discount * price) / 100);

    return (
        <div className='text-slate-500 font-bold text-center border-2 rounded hover:border-blue-500 pt-1 relative'>
            <div>
                <div className='h-48 px-1'>
                    <img className='w-full h-full' src={img} alt="" />
                </div>
                <p className='flex items-center justify-center font-normal line-through decoration-2'>
                    <span><FaBangladeshiTakaSign /></span>
                    <span>{price}</span>
                </p>
                <p className='flex justify-center items-center'>
                    <span><FaBangladeshiTakaSign /></span>
                    <span>{discount_price}</span>
                </p>
                <p><small>{name}</small></p>
                <Link to='cart' className='mt-3 flex justify-center items-center w-full h-10 bg-blue-500 hover:bg-blue-600 text-white'><span>অর্ডার করুন</span></Link>
            </div>
            <div className='font-normal bg-blue-500 px-2 text-white rounded-xl absolute top-3 right-3'>
                <p><small>Discount {discount} %</small></p>
            </div>

        </div>
    );
};

export default Product;