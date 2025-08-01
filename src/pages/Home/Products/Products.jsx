import React, { useEffect } from 'react';
import Product from './Product';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

const Products = () => {
    const { data: products, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => {
            return axios.get("https://api.peakyonline.com/products")
        }
    })
    useEffect(() => {
        if (isSuccess && products?.data) {
            // Clear previous ecommerce data before pushing the new product
            window.dataLayer.push({ ecommerce: null });

            // Pushing Data to the Data Layer for Google Tag Manager (GTM)
            window.dataLayer.push({
                event: "view_item_list",
                gtm: {
                    uniqueEventId: new Date().getTime(), // Ensure unique event ID
                    historyChangeSource: "pushState",
                    oldHistoryState: null, // Reset old history state
                    newHistoryState: { usr: null, key: "new_key", idx: 2 }, // Keep new state
                },
                ecommerce: {
                    currency: 'BDT',
                    items: products.data
                },
                pagePath: window.location.pathname,
            });
        }
    }, [isSuccess, products]);

    let content;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isSuccess) {
        content = products.data.map(product => <Product key={product._id} product={product}></Product>)
    }


    return (
        <div className='mb-6'>
            <div className='flex justify-between mb-2'>
                <h2 className='text-2xl font-bold text-slate-600 mb-2 underline'>Products</h2>
                <button className='btn btn-accent btn-xs'>
                    <p>See all</p>
                    <span><FaLongArrowAltRight /></span>
                </button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-5'>
                {content}
            </div>

        </div>
    );
};

export default Products;