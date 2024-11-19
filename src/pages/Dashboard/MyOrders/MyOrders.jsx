import React, { useEffect, useState } from 'react';
import OrderProduct from './OrderProduct';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import DashboardButton from '../DashboardButton';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/order/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user.email])

    let content;

    if (loading) {
        return <Loading></Loading>
    }

    if (orders.length !== 0) {
        content = orders.map((order, index) => <OrderProduct index={index} key={order._id} order={order}></OrderProduct>)
    }

    if (orders.length === 0) {
        content = <tr><td colSpan={9} className='text-center py-4'><p>You are our new customer. You did not order yet. Please Order first</p></td></tr>
    }

    console.log(orders)

    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Sub Total</th>
                            <th>Shipping</th>
                            <th>Total</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;