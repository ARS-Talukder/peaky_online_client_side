import React from 'react';

const Order = ({ order, index }) => {
    const { date, time, shipping, total, products, email, phone, address } = order;
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>
                {products.map(p => <p key={p.product_id}>{p.name}</p>)}
            </td>
            <td>
                {products.map(p => <p key={p.product_id}>{p.quantity}</p>)}
            </td>
            <td>
                {products.map(p => <p key={p.product_id}>{p.discount_price}</p>)}
            </td>
            <td>
                {products.map(p => <p key={p.product_id}>{p.discount + "%"}</p>)}
            </td>
            <td>
                {products.map(p => <p key={p.product_id}>{p.discount_price * p.quantity}</p>)}
            </td>
            <td>{shipping}</td>
            <td className='font-bold'>{total}</td>
            <td>
                <p>{date}</p>
                <p>{time}</p>
            </td>
            <td>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
            </td>
        </tr>
    );
};

export default Order;