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
        content = orders.data.map((order, index) => <Order index={index} key={order._id} order={order} refetch={refetch}></Order>)
    }

    return (
        <div>
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
                            <th>With Discount</th>
                            <th>Sub Total</th>
                            <th>Shipping</th>
                            <th>Total</th>
                            <th>Order Date</th>
                            <th>Information</th>
                            <th>State</th>
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

export default AllOrders;