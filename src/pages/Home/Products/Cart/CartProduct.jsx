import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CartProduct = ({ product, handleTotal }) => {
    const { product_id, name, price, img, discount } = product;
    const discount_price = price - ((discount * price) / 100);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const handleDelete = () => {
        const proceed = window.confirm("Delete Product??");
        if (proceed) {
            navigate('/');
            toast.success('Select Another Product for order')
        }
        else {
            return;
        }
    }

    const decrementQuantity = async () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            handleTotal(quantity, "decrement");
        }
    }
    const incrementQuantity = async () => {
        setQuantity(quantity + 1);
        handleTotal(quantity, "increment");
    }

    return (
        <tr>
            <td className='flex items-center'>
                <button onClick={handleDelete}>
                    <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                </button>
                <img className='ml-4 mr-1' width={30} src={img} alt="product_image" />
                <span>{name}</span>
            </td>
            <td>{discount_price}</td>
            <td className='flex justify-center items-center'>
                <button className='text-blue-500 hover:text-blue-800 text-xl' onClick={decrementQuantity}><FaMinus /></button>
                <p className='mx-3 border border-black px-3'>{quantity}</p>
                <button className='text-blue-500 hover:text-blue-800 text-xl' onClick={incrementQuantity}><FaPlus /></button>
            </td>
            <td>{discount_price * quantity}</td>
        </tr>
    );
};

export default CartProduct;