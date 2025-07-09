import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatchCart } from '../../../ContextReducer';
const CheckoutProduct = ({ product, index }) => {
    const { product_id, name, price, img, discount, quantity, color, size } = product;
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
        <tr className='flex justify-between my-4 border-b'>
            <td className='flex items-center'>
                <button className='btn btn-error btn-xs text-white font-bold' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                    {/* <AiFillDelete className="text-xl text-red-500"></AiFillDelete> */}
                    <small>Delete</small>
                </button>
                <img className='ml-4 mr-1' width={40} src={img} alt="product_image" />
                <div>
                    <p><small>{name}</small></p>
                    <div className='flex justify-start items-center'>
                        <button className='text-blue-500 hover:text-blue-800 border-2' onClick={decrementQuantity}><small><FaMinus /></small></button>
                        <p className='mx-1 border-2 px-1'><small>{newQuantity}</small></p>
                        <button className='text-blue-500 hover:text-blue-800 border-2' onClick={incrementQuantity}><small><FaPlus /></small></button>

                        {color && <p className='ml-4 px-2 bg-slate-400 font-bold text-white rounded-lg'><small>{color}</small></p>}

                        {size && <p className='ml-4 px-2 bg-slate-400 font-bold text-white rounded-lg'><small>{size}</small></p>}
                    </div>
                </div>

            </td>

            <td className='font-bold'><small>{discount_price * newQuantity}</small></td>
        </tr>
    );
};

export default CheckoutProduct;