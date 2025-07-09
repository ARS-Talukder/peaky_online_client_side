import React from 'react';
import DashboardButton from '../../DashboardButton';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../Shared/Loading';
import { Link } from 'react-router-dom';

const SpecialCategoriesList = () => {
    const { data: specialCategories, isLoading, isSuccess, isError, error, refetch } = useQuery({
        queryKey: ["specialCategories"],
        queryFn: () => {
            return axios.get("https://api.peakyonline.com/special_categories")
        }
    })
    let content;

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(specialCategories.data)

    if (isSuccess) {
        content = specialCategories.data.map((category, index) =>
            <Link to={`/something`} key={category._id}>
                <div className='w-1/4 btn btn-accent p-16 mx-2 rounded-lg cursor-pointer'>
                    <h2 className='font-bold text-white'>{category.name}</h2>
                </div>
            </Link>
        )
    }
    return (
        <div>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>
            <div className='bg-white p-5 my-4 rounded-xl shadow-xl'>
                <h2 className='text-xl font-bold text-slate-600'>Special Categories List</h2>
            </div>
            <div className="overflow-x-auto bg-white rounded-xl shadow-xl my-6 p-4">
                {content}
            </div>
        </div>
    );
};

export default SpecialCategoriesList;