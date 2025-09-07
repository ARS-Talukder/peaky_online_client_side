import React from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaLongArrowAltRight } from "react-icons/fa";
import Loading from '../../Shared/Loading';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data: categories, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: () => {
            return axios.get("http://localhost:5000/categories")
        }
    })
    let content;

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isSuccess) {
        content = categories.data
            .slice(0, 12) // Show only the first 12 items
            .map(category => <Category key={category._id} category={category} />);
    }
    return (
        <div className='mb-6'>
            <div className='flex justify-between mb-2'>
                <h2 className='text-2xl font-bold text-slate-600 mb-2 underline'>Categories</h2>
                {/* <button className='btn btn-accent btn-xs'>
                    <p>See all</p>
                    <span><FaLongArrowAltRight /></span>
                </button> */}
                <Link to="/all_categories" className='btn btn-accent btn-xs'>
                    <p>See all</p>
                    <span><FaLongArrowAltRight /></span>
                </Link>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 gap-5'>
                {content}
            </div>

        </div>
    );
};

export default Categories;