import React, { useEffect, useState } from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useCart, useDispatchCart } from '../../ContextReducer';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, category, img, price, discount } = product;
    const discount_price = price - ((discount * price) / 100);
    const navigate = useNavigate();

    const navigateToProductsDetails = () => {
        navigate(`product/${_id}`, { state: product })
    }

    const handleOrderNow = async () => {
        await dispatch({ type: "ADD", product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, quantity: 1 });
        toast.success('Added to the cart')
        navigate('cart', { state: product })

    }

    let productAdded = false;

    let dispatch = useDispatchCart();
    let data = useCart();

    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, quantity: 1 });
        toast.success('Added to the cart')

    }

    if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            const data_id = data[i].product_id;
            if (data_id === _id) {
                productAdded = true
            }
        }
    }


    return (
        <div className='text-slate-500 font-bold text-center border-2 rounded hover:border-blue-500 pt-1 relative'>
            <div>
                <div onClick={navigateToProductsDetails}>
                    <div className='h-48 px-1'>
                        <img className='w-full h-full' src={img} alt="" />
                    </div>
                    <p><small>{name}</small></p>
                    <div className='flex justify-center'>
                        <p className='flex items-center justify-center font-normal line-through decoration-2 mr-2'>
                            <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                            <span>{price}</span>
                        </p>
                        <p className='flex justify-center items-center'>
                            <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                            <span>{discount_price}</span>
                        </p>
                    </div>
                </div>
                <div className='px-2'>
                    <button onClick={handleOrderNow} className='mt-1 flex justify-center items-center w-full h-9 bg-blue-500 hover:bg-blue-600 text-white'><span>ORDER NOW</span></button>
                    {
                        productAdded === false ?
                            <button onClick={handleAddToCart} className='my-1 flex justify-center items-center w-full h-9 bg-sky-100 hover:bg-blue-100 text-blue-500 rounded'><span>Add To Cart</span></button>
                            :
                            <button className='my-1 flex justify-center items-center w-full h-9 bg-sky-100 text-blue-300 rounded' disabled><span>Added</span></button>
                    }
                </div>
            </div>
            <div className={discount == 0 ? 'hidden' : 'font-normal bg-blue-500 px-2 text-white rounded-xl absolute top-3 right-3'}>
                <p><small>Discount {discount} %</small></p>
            </div>

        </div>
    );
};

export default Product;