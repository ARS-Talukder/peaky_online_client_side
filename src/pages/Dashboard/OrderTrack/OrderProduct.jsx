import React from 'react';
import { TbPointFilled } from "react-icons/tb";

const OrderProduct = ({ order }) => {
    const { orderID, date, time, shipping, total, products, status } = order;

    let classColor;
    if (status === 'pending') {
        classColor = 'text-xl text-yellow-500'
    }
    if (status === 'shipped') {
        classColor = 'text-xl text-blue-700'
    }
    if (status === 'delivered') {
        classColor = 'text-xl text-green-600'
    }
    if (status === 'canceled') {
        classColor = 'text-xl text-red-500'
    }
    return (
        <tr className='text-slate-600 font-bold'>
            <td className='border'>
                {orderID}
            </td>
            <td className='border'>
                {products.map(p => <p key={p.product_id}>{p.name}</p>)}
            </td>
            <td className='border'>
                {products.map(p => <p key={p.product_id}>{p.quantity}</p>)}
            </td>
            <td className='border'>
                {products.map(p => <p key={p.product_id}>{p.discount_price}</p>)}
            </td>
            <td className='border'>
                {products.map(p => <p key={p.product_id}>{p.discount_price * p.quantity}</p>)}
            </td>
            <td className='border'>{shipping}</td>
            <td className='border'>{total}</td>
            <td className='border'>
                <p>{date}</p>
                <p>{time}</p>
            </td>
            <td className='flex justify-center items-center'>
                <span className={classColor}><TbPointFilled /></span>
                <span>{status}</span>
            </td>
        </tr>
    );
};

export default OrderProduct;