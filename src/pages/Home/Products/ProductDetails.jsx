import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductDetails = () => {
    const { state } = useLocation();
    const product = state;
    const { name, price, discount, category, img, img_2, img_3, descr } = product;
    const discount_price = price - ((discount * price) / 100);
    const navigate = useNavigate();

    const handleAddToCart = async () => {
        navigate('/cart', { state: product })

    }
    // console.log(product);
    return (
        <div className='flex justify-center pt-1 px-2 text-center'>
            <div className='w-full lg:w-1/2 md:w-1/2'>
                <div>
                    <p className='text-2xl font-bold my-4 underline'>{name}</p>
                </div>
                <div className='flex mb-4'>
                    <img src={img} width={250} alt="Product_image" />
                    <div className='mx-2'>
                        <img src={img_2} width={100} alt="product_image_2" />
                        <img className='my-2' src={img_3} width={100} alt="product_image_3" />
                    </div>
                </div>
                <div>
                    <p className='flex items-center justify-center decoration-2'>
                        <span className='font-bold'>Discount: </span>
                        <span>{discount}%</span>
                    </p>
                    <p className='flex items-center justify-center font-normal line-through decoration-2 text-xl'>
                        <span><FaBangladeshiTakaSign /></span>
                        <span>{price}</span>
                    </p>
                    <p className='flex justify-center items-center text-xl'>
                        <span><FaBangladeshiTakaSign /></span>
                        <span>{discount_price}</span>
                    </p>
                    <p>{descr}</p>
                </div>

                <div className='flex justify-center'>
                    <button onClick={handleAddToCart} className='my-4 flex justify-center items-center w-1/2 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'><span>অর্ডার করুন</span></button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;