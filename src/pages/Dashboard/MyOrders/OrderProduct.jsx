import React from 'react';
import { AiFillDelete } from "react-icons/ai";

const OrderProduct = ({ order, index }) => {
    const { date, time, shipping, total, products } = order;
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
                {products.map(p => <p key={p.product_id}>{p.discount_price * p.quantity}</p>)}
            </td>
            <td>{shipping}</td>
            <td className='font-bold'>{total}</td>
            <td>
                <p>{date}</p>
                <p>{time}</p>
            </td>
        </tr>
    );
};

export default OrderProduct;