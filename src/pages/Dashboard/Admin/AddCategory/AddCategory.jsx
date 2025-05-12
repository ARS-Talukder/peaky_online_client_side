import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import DashboardButton from '../../DashboardButton';

const AddCategory = () => {
    const navigate = useNavigate();

    const handleAddCategory = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const category = { name, img };
        fetch('https://api.peakyonline.com/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Category added successfully`);
                navigate('/admin_dashboard/categories_list')

            })
    }
    return (
        <div>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>

            <div className='flex justify-center items-center mt-6 pt-8 pb-16 px-4'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-slate-500 text-2xl font-bold">Add Your Product</h2>
                        <form onSubmit={handleAddCategory} action="">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Category Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Category Name" className="input input-bordered input-sm w-full max-w-xs" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Category Image URL</span>
                                </label>
                                <input type="text" name="img" placeholder="URL" className="input input-bordered input-sm w-full max-w-xs" required />

                            </div>

                            <input className='btn w-full max-w-xs mt-4 text-white bg-blue-500 hover:bg-blue-600' type="submit" value="ADD" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;