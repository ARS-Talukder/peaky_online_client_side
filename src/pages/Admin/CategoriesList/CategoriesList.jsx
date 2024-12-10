import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../Shared/Loading';
import AdminDashboardButton from '../AdminDashboardButton';
import CategoryTable from './CategoryTable';

const CategoriesList = () => {
    const { data: categories, isLoading, isSuccess, isError, error, refetch } = useQuery({
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
        content = categories.data.map((category, index) => <CategoryTable key={category._id} index={index} category={category} refetch={refetch}></CategoryTable>)
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
                            <th>Category Name</th>
                            <th>Img</th>
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

export default CategoriesList;