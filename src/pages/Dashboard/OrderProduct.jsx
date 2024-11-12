import React from 'react';
import { AiFillDelete } from "react-icons/ai";

const OrderProduct = ({ product, index }) => {
    const { name, order_date, price, discount, quantity } = product;
    const discount_price = price - ((discount * price) / 100);
    const total = 6788;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{order_date}</td>
            <td>{discount_price}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td>
                <button>
                    <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                </button>
            </td>
        </tr>
    );
};

export default OrderProduct;