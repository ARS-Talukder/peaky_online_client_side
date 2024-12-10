import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../Shared/Loading';
import AdminDashboardButton from '../AdminDashboardButton';
import Customer from './Customer';

const AllCustomers = () => {
    const { data: customers, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["customers"],
        queryFn: () => {
            return axios.get("http://localhost:5000/customers")
        }
    })

    let content;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isSuccess) {
        content = customers.data.map((customer, index) => <Customer index={index} key={customer._id} customer={customer}></Customer>)
    }

    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <AdminDashboardButton></AdminDashboardButton>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
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

export default AllCustomers;