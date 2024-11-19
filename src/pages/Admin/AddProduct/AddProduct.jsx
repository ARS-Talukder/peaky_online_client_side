import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminDashboardButton from '../AdminDashboardButton';

const AddProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const { data: categories, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: () => {
            return axios.get("http://localhost:5000/categories")
        }
    })

    const navigate = useNavigate();
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleCategorySelection = (event) => {
        if (event.target.value === 'Default') {
            return
        }
        else {
            setSelectedCategory(event.target.value);
        }
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const category = selectedCategory;
        if (category === "") {
            return toast.error("You must select a Category")
        }
        const price = e.target.price.value;
        const discount = e.target.discount.value;
        const img = e.target.img.value;
        const product = { name, category, price, discount, img };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Product added successfully`);
                navigate('/admin_dashboard')

            })

    }
    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <AdminDashboardButton></AdminDashboardButton>

            <div className='flex justify-center items-center mt-6 pt-8 pb-16 px-4'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-slate-500 text-2xl font-bold">Add Your Product</h2>
                        <form onSubmit={handleAddProduct} action="">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Product Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered input-sm w-full max-w-xs" required />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Select Category</span>
                                </label>
                                <select defaultValue={'Default'} onChange={handleCategorySelection} name='appointment_service' className="input input-bordered input-sm w-full" required>
                                    <option value="Default" disabled>Select Category</option>
                                    {
                                        categories.data?.map(c => <option key={c._id} value={c.name} >{c.name}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Enter Product Price" className="input input-bordered input-sm w-full max-w-xs" required />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Discount</span>
                                </label>
                                <input type="number" name="discount" placeholder="Enter Discount" className="input input-bordered input-sm w-full max-w-xs" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Product Image URL</span>
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

export default AddProduct;