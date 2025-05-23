import React, { useEffect, useState } from 'react';
import DashboardButton from '../DashboardButton';
import OrderProduct from './OrderProduct';

const OrderTrack = () => {
    const [orders, setOrders] = useState([]);
    const [noOrder, setNoOrder] = useState("");

    let content;

    if (orders.length !== 0) {
        content = orders.map((order) => <OrderProduct key={order._id} order={order} ></OrderProduct>)
    }

    const handleMyOrder = (e) => {
        e.preventDefault();
        const phone = e.target.phone.value;
        fetch(`https://api.peakyonline.com/order_by_phone/${phone}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    setNoOrder("This number has  no Orders")
                }
                else {
                    setOrders(data)
                }
            })
    }

    return (
        <div>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>
            {
                orders.length === 0 ?
                    (noOrder === "" ?
                        < div className='flex justify-center mb-8 lg:mb-0 lg:my-4'>
                            <form action="" className='' onSubmit={handleMyOrder}>
                                <p className='my-1 font-bold text-gray-700'><small>Enter Your Mobile Number to see the order status</small></p>
                                <input type="number" name="phone" placeholder="Enter Mobile Number" className="input input-bordered input-md w-full max-w-xs" required />
                                <input className='w-full btn btn-md max-w-xs text-white bg-blue-500 hover:bg-blue-600 my-1' type="submit" value="Submit" />
                            </form>
                        </div>
                        :
                        < div className='flex justify-center mb-8 lg:mb-0 lg:my-4'>
                            <form action="" className='' onSubmit={handleMyOrder}>
                                <p className='my-1 font-bold text-gray-700'><small>Enter Your Mobile Number to see the order status</small></p>
                                <input type="number" name="phone" placeholder="Enter Mobile Number" className="input input-bordered input-md w-full max-w-xs"  onChange={()=>{setNoOrder("")}} required />
                                <input className='w-full btn btn-md max-w-xs text-white bg-blue-500 hover:bg-blue-600 my-1' type="submit" value="Submit" />
                                <p className='font-bold text-red-500'><small>Sorry!! {noOrder}</small></p>
                            </form>
                        </div>
                    )
                    :
                    <div className="overflow-x-auto bg-white rounded-xl shadow-xl my-6">
                        <table className="table table border">
                        <thead className='bg-blue-700 text-white'>
                                <tr className='text-center'>
                                    <th className='border'>OrderID</th>
                                    <th className='border'>Product</th>
                                    <th className='border'>Qty</th>
                                    <th className='border'>Price</th>
                                    <th className='border'>Sub Total</th>
                                    <th className='border'>Shipping</th>
                                    <th className='border'>Total</th>
                                    <th className='border'>Order Date</th>
                                    <th className='border'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content}
                            </tbody>
                        </table>
                    </div>
            }

        </div >
    );
};

export default OrderTrack;