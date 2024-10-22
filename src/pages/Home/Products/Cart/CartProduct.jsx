import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartProduct = ({ product }) => {
    const { name, price, img, discount, quantity } = product;
    const discount_price = price - ((discount * price) / 100);
    const [newQuantity, setNewQuantity] = useState(quantity);

    const decrementQuantity = () => {
        if (newQuantity > 1) {
            setNewQuantity(newQuantity - 1);
        }
    }
    const incrementQuantity = () => {
        setNewQuantity(newQuantity + 1);
    }

    return (
        <tr>
            <td className='flex items-center'>
                <button>
                    <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                </button>
                <img className='ml-4 mr-1' width={30} src={img} alt="product_image" />
                <span>{name}</span>
            </td>
            <td>{discount_price}</td>
            <td className='flex justify-center items-center'>
                <button className='text-blue-500 hover:text-blue-800 text-xl' onClick={decrementQuantity}><FaMinus /></button>
                <p className='mx-3 border border-black px-3'>{newQuantity}</p>
                <button className='text-blue-500 hover:text-blue-800 text-xl' onClick={incrementQuantity}><FaPlus /></button>
            </td>
            <td>{discount_price}</td>
        </tr>
    );
};

export default CartProduct;