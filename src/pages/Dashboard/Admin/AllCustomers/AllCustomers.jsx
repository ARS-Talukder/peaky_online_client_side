import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Customer from './Customer';
import Loading from '../../../Shared/Loading';
import DashboardButton from '../../DashboardButton';

const AllCustomers = () => {
    const { data: customers, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["customers"],
        queryFn: () => {
            return axios.get("https://api.peakyonline.com/customers")
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
        <div>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>
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