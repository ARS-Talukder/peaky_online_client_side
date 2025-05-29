import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Order from './Order';
import DashboardButton from '../../DashboardButton';
import Loading from '../../../Shared/Loading';

const AllOrders = () => {
    const { data: orders, isLoading, isSuccess, isError, error, refetch } = useQuery({
        queryKey: ["orders"],
        queryFn: () => {
            return axios.get("https://api.peakyonline.com/orders")
        }
    })

    let content;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isSuccess) {
        content = orders.data.map((order,index) => <Order index={index} key={order._id} order={order} refetch={refetch}></Order>)
    }

    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>
            <div className='bg-white p-5 my-4 rounded-xl shadow-xl'>
                <h2 className='text-xl font-bold text-slate-600'>All Orders</h2>
            </div>
            <div className="overflow-x-auto bg-white rounded-xl shadow-xl my-6">
                <table className="table table border">
                    <thead className='bg-blue-700 text-white'>
                        <tr className='text-center'>
                            <th className='border'>SL</th>
                            <th className='border'>OrderID</th>
                            <th className='border'>Product</th>
                            <th className='border'>Price</th>
                            <th className='border'>Shipping</th>
                            <th className='border'>Total</th>
                            <th className='border'>Order Date</th>
                            <th className='border'>Information</th>
                            <th className='border'>Payment</th>
                            <th className='border'>State</th>
                            <th className='border'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;