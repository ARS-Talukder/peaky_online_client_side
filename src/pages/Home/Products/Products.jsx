import React from 'react';
import Product from './Product';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import axios from 'axios';

const Products = () => {
    const { data: products, isLoading, isSuccess, isError, error } = useQuery({
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
        content = products.data.map(product => <Product key={product._id} product={product}></Product>)
    }

    return (
        <div className='mb-6'>
            <h2 className='text-2xl font-bold text-black mb-2'>Products</h2>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-5'>
                {content}
            </div>

        </div>
    );
};

export default Products;