import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../Shared/Loading';
import AdminDashboardButton from '../AdminDashboardButton';
import ProductTable from './ProductTable';

const ProductsList = () => {
    const { data: products, isLoading, isSuccess, isError, error, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: () => {
            return axios.get("https://api.peakyonline.com/products")
        }
    })
    let content;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isSuccess) {
        content = products.data.map((product, index) => <ProductTable key={product._id} index={index} product={product} refetch={refetch}></ProductTable>)
    }
    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <AdminDashboardButton></AdminDashboardButton>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Dis Price</th>
                            <th>img</th>
                            <th>Delete</th>
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

export default ProductsList;