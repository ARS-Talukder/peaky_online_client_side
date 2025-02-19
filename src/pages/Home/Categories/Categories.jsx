import React from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Shared/Loading';

const Categories = () => {
    const { data: categories, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: () => {
            return axios.get("https://api.peakyonline.com/categories")
        }
    })
    let content;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isSuccess) {
        content = categories.data.map(category => <Category key={category._id} category={category}></Category>)
    }
    return (
        <div className='flex justify-center overflow-x-scroll no-scrollbar mt-6 mb-6'>
            {content}
        </div>
    );
};

export default Categories;