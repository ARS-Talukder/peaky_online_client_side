import React, { useState } from 'react';
import { useDispatchCart } from '../../../../ContextReducer';
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartDrawerSingle = ({ product, index }) => {
    const { product_id, name, price, img, discount,discount_price, quantity, color, size } = product;
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
        <div className="border-b py-6 flex text-start relative">
            <img className='h-1/2' src={img} width={70} alt="img" />
            <div className='mx-2'>
                <h4 className="font-semibold">{name}</h4>
                <div>
                    {color && <span className='px-2 mr-1 bg-slate-400 font-bold text-white rounded-lg'><small>{color}</small></span>}
                    {size && <span className='px-2 bg-slate-400 font-bold text-white rounded-lg'><small>{size}</small></span>}
                </div>
                <div>
                    <div className='flex justify-start items-center'>
                        <button className='text-blue-500 hover:text-blue-800 border-2' onClick={decrementQuantity}><FaMinus /></button>
                        <p className='mx-0.5 border-2 px-1'><small>{newQuantity}</small></p>
                        <button className='text-blue-500 hover:text-blue-800 border-2' onClick={incrementQuantity}><FaPlus /></button>
                    </div>
                </div>

                <p className="text-sm font-bold"><span className='text-gray-500'>{quantity}</span> × <span className='text-red-600'>৳{discount_price}</span></p>
            </div>
            <button onClick={() => { dispatch({ type: "REMOVE", index: index }) }} className='absolute right-2 top-2'>
                <span className='text-slate-500 hover:font-bold hover:text-black hover:bg-slate-300 px-1 rounded-full'>x</span>
            </button>
        </div>
    );
};

export default CartDrawerSingle;