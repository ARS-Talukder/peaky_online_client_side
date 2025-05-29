import React from 'react';
import toast from 'react-hot-toast';
import { TbPointFilled } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

const Order = ({ order, index, refetch }) => {
    const { _id, date, orderID, time, shipping, total, products, customerName, email, phone, address, status, paymentMethod, transactionID } = order;
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

    const handleDelete = (id) => {
        const proceed = window.confirm('Do You Want to remove this order information from database?');
        if (proceed) {
            fetch(`https://api.peakyonline.com/order-delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Removed");
                    refetch();
                })
        }
        else {
            return;
        }
    }

    return (
        <tr className='text-slate-600 font-bold'>
            <th className='border'>{index + 1}</th>
            <th className='border'>{orderID}</th>
            <td className='border'>
                {products.map(p => <p key={p.product_id}>
                    <p>{p.name}</p>
                    {p.size && <p className='mt-1'><span className='border border-blue-500 px-2'>{p.size}</span></p>
                    }
                    {p.color && <p className='mt-1'><span className='border border-blue-500 px-2'>{p.color}</span></p>}

                </p>)}
            </td>
            <td className="border">
                {products.map(p => (
                    <div key={p.product_id} className="flex justify-center items-center gap-1">
                        <span>{p.quantity}</span>
                        <span>x</span>
                        <span>{p.discount_price}</span>
                        <span className='text-red-600'>(-{p.discount}%)</span>
                        <span className='text-black'>={p.discount_price * p.quantity}</span>
                        
                    </div>
                ))}
            </td>
            <td className='border'>{shipping}</td>
            <td className='font-bold border'>{total}</td>
            <td className='border'>
                <p>{date}</p>
                <p>{time}</p>
            </td>
            <td className='border'>
                <p className='text-blue-600'>{customerName}</p>
                <p>{email}</p>
                <p className='text-red-600'>{phone}</p>
                <p>{address.street}, {address.thana}, {address.district}</p>
            </td>
            <td className='border'>
                <p>{paymentMethod}</p>
                <p className='text-red-600'>{transactionID}</p>
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
            <td className='border'>
                <button onClick={() => handleDelete(_id)} className='p-1 bg-red-100 rounded hover:bg-red-200' title="Delete">
                    <AiFillDelete className="text-2xl text-red-500"></AiFillDelete>
                </button>
            </td>
        </tr>
    );
};

export default Order;