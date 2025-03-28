import React from 'react';
import toast from 'react-hot-toast';
import { TbPointFilled } from "react-icons/tb";

const Order = ({ order, index, refetch }) => {
    const { _id, date, time, shipping, total, products, customerName, email, phone, address, status } = order;
    const handleOrderState = (event) => {
        const stateName = event.target.value;
        const data = { state: stateName };
        fetch(`https://api.peakyonline.com/order_state/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            return res.json()
        }).then(data => {
            refetch();

        })
        toast.success(`Order is ${stateName}`)
    }

    let classColor
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
            <th className='border'>{index + 1}</th>
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
                {products.map(p => <p key={p.product_id}>{p.discount + "%"}</p>)}
            </td>
            <td className='border'>
                {products.map(p => <p key={p.product_id}>{p.discount_price * p.quantity}</p>)}
            </td>
            <td className='border'>{shipping}</td>
            <td className='font-bold border'>{total}</td>
            <td className='border'>
                <p>{date}</p>
                <p>{time}</p>
            </td>
            <td className='border'>
                <p>{customerName}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
            </td>
            <td className='flex justify-center items-center'>
                <p className='flex justify-center items-center'>
                    <span className={classColor}><TbPointFilled /></span>
                    <span>{status}</span>
                </p>
                <select className={status === 'delivered' || status === 'canceled' ? "select select-bordered select-xs w-1 border-0 hidden" : "select select-bordered select-xs w-1 border-0"} onChange={handleOrderState}>
                    <option value="pending" selected>pending</option>
                    <option value="shipped">shipped</option>
                    <option value="delivered">delivered</option>
                    <option value="canceled">canceled</option>
                </select>
            </td>
        </tr>
    );
};

export default Order;