import React, { useState } from 'react';
import DashboardButton from '../../DashboardButton';
import { FaCloudUploadAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddSpecialCategory = () => {
    const navigate = useNavigate();

    const handleAddSpecialCategory = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const category = { name, products: [] }

        fetch('https://api.peakyonline.com/special_categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Done`);
                navigate('/dashboard/special_categories_list')

            })

    }
    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>

            <div className='bg-white p-5 my-4 rounded-xl shadow-xl'>
                <h2 className='text-xl font-bold text-slate-600'>Special Category Upload</h2>
            </div>
            <div className='overflow-x-auto my-6'>
                <form onSubmit={handleAddSpecialCategory} action="">
                    {/* Basic Information */}
                    <section className='bg-white p-5 rounded-xl'>
                        <h2 className='text-2xl'>Information</h2>
                        {/* Special Category name */}
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">CATEGORY NAME</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered input-sm w-full h-14 bg-slate-50" required />
                        </div>

                    </section>


                    {/* Submit button */}
                    <button className='btn w-full mt-4 text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2' type="submit">
                        <span className='text-2xl'><FaCloudUploadAlt /></span>
                        <span className='font-bold'>PUBLISH</span>
                    </button>

                </form>
            </div>
        </div >
    );
};

export default AddSpecialCategory;