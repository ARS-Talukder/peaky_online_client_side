import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCart, useDispatchCart } from '../../../ContextReducer';

const CartProduct = ({ product, index }) => {
    const { product_id, name, price, img, discount, quantity } = product;
    const discount_price = price - ((discount * price) / 100);
    const [newQuantity, setNewQuantity] = useState(quantity);
    let dispatch = useDispatchCart();

    const decrementQuantity = async () => {
        if (newQuantity > 1) {
            setNewQuantity(newQuantity - 1);
            await dispatch({ type: "UPDATE", product_id: product_id, quantity: newQuantity - 1 })
            return
        }
    }
    const incrementQuantity = async () => {
        setNewQuantity(newQuantity + 1);
        await dispatch({ type: "UPDATE", product_id: product_id, quantity: newQuantity + 1 })
    }
    return (
        <tr>
            <td className='flex items-center'>
                <button onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
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
            <td>{discount_price * newQuantity}</td>
        </tr>
    );
};

export default CartProduct;