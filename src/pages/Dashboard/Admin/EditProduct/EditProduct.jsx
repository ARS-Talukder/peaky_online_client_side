import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
import DashboardButton from '../../DashboardButton';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaCloudUploadAlt } from "react-icons/fa";

const EditProduct = () => {
    const param = useParams();
    const id = param.id;
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://api.peakyonline.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])
    const { _id, name, category, images, price, discount, shippingCharge, subtitle, description, whyBest } = product;

    const [editShippingCharge, setEditShippingCharge] = useState(shippingCharge);

    const [selectedCategory, setSelectedCategory] = useState('');
    const { data: categories, isLoading, isSuccess, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: () => {
            return axios.get("https://api.peakyonline.com/categories")
        }
    })

    if (Object.keys(product).length === 0) {
        return <Loading />;
    }

    const discount_price = price - ((discount * price) / 100);

    const handleShippingCharge = (event) => {
        if (event.target.value === 'Default') {
            setEditShippingCharge(shippingCharge)
        }
        else {
            setEditShippingCharge(event.target.value);
        }
    }

    // Handling Categories Selection
    const handleCategorySelection = (event) => {
        if (event.target.value === 'Default') {
            return
        }
        else {
            setSelectedCategory(event.target.value);
        }
    }

    const handleEditProduct = () => {

    }

    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>

            <div className='bg-white p-5 my-4 rounded-xl shadow-xl'>
                <h2 className='text-xl font-bold text-slate-600'>Edit Product</h2>
            </div>
            <div className='overflow-x-auto my-6'>
                <form onSubmit={handleEditProduct} action="">
                    {/* Basic Information */}
                    <section className='bg-white p-5 rounded-xl'>
                        <h2 className='text-2xl'>Basic information</h2>
                        {/* Product name */}
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">PRODUCT NAME</span>
                            </label>
                            <input type="text" name="name" placeholder={name} className="input input-bordered input-sm w-full h-14 bg-slate-50" />
                        </div>
                        {/* Price & Discount */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-10 md:gap-4'>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">PRICE</span>
                                </label>
                                <input type="number" name="price" placeholder={price} className="input input-bordered input-sm w-full h-14 bg-slate-50" />
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">DISCOUNT (price)</span>
                                </label>
                                <input type="number" name="discount_price" placeholder={discount_price} className="input input-bordered input-sm w-full h-14 bg-slate-50" />
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">Shipping Charge</span>
                                </label>
                                <select defaultValue={'Default'} onChange={handleShippingCharge} name='shipping_charge' className="input input-bordered input-sm w-full h-14 bg-slate-50">
                                    <option value="Default" disabled>{shippingCharge}</option>
                                    <option value='normal' >Normal</option>
                                    <option value='free' >Free</option>
                                </select>
                            </div>
                        </div>
                        {/* Subtitle & Category */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-10 md:gap-4'>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">SUBTITLE</span>
                                </label>
                                <input type="text" name="subtitle" placeholder={subtitle} className="input input-bordered input-sm w-full h-14 bg-slate-50" />
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text text-slate-500 font-bold">SELECT CATEGORY</span>
                                </label>
                                <select defaultValue={'Default'} onChange={handleCategorySelection} name='appointment_service' className="input input-bordered input-sm w-full h-14 bg-slate-50" required>
                                    <option value="Default" disabled>{category}</option>
                                    {
                                        categories?.data?.map(c => <option key={c._id} value={c.name} >{c.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </section>

                    Product Color
                    {/* <section className='bg-white p-5 rounded-xl my-4'>
                        <h2 className='text-slate-500 font-bold mb-2'>Product Color</h2>
                        <ul>
                            {
                                productColor.map((p) =>
                                    <li key={p._id} className='px-2 my-2 flex items-center'>
                                        <span>✅</span>
                                        <span className='mx-2'>{p.text}</span>
                                        <button className='bg-red-100' title="Delete" onClick={() => handleDeleteProductColor(p._id)}>
                                            <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                                        </button>
                                    </li>)
                            }
                        </ul>
                        <div className='flex justify-between my-2'>
                            <div className="w-5/6 my-2 mr-2">
                                <input type="text" className="input input-bordered input-sm w-full h-14 bg-slate-50" value={productColorText}
                                    onChange={(e) => setProductColorText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            handleProductColor();
                                        }
                                    }} />
                            </div>
                            <div className="w-1/6 my-2">
                                <button type="button" onClick={handleProductColor} className='w-full btn btn-success h-14 text-white'>Add</button>
                            </div>
                        </div>
                    </section> */}

                    {/* Size */}
                    {/* <section className='bg-white p-5 rounded-xl my-4'>
                        <h2 className='text-slate-500 font-bold mb-2'>Size</h2>
                        <ul>
                            {
                                size.map((s) =>
                                    <li key={s._id} className='px-2 my-2 flex items-center'>
                                        <span>✅</span>
                                        <span className='mx-2'>{s.text}</span>
                                        <button className='bg-red-100' title="Delete" onClick={() => handleDeleteSize(s._id)}>
                                            <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                                        </button>
                                    </li>)
                            }
                        </ul>
                        <div className='flex justify-between my-2'>
                            <div className="w-5/6 my-2 mr-2">
                                <input type="text" className="input input-bordered input-sm w-full h-14 bg-slate-50" value={sizeText}
                                    onChange={(e) => setSizeText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            handleSize();
                                        }
                                    }} />
                            </div>
                            <div className="w-1/6 my-2">
                                <button type="button" onClick={handleSize} className='w-full btn btn-success h-14 text-white'>Add</button>
                            </div>
                        </div>
                    </section> */}


                    {/* Why our products are the best */}
                    <section className='bg-white p-5 rounded-xl my-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Why our products are the best?</span>
                            </label>
                            <textarea name="whyBest" placeholder={whyBest} className="textarea textarea-bordered textarea-sm w-full h-24 bg-slate-50"></textarea>

                        </div>
                    </section>


                    {/* Description */}
                    <section className='bg-white p-5 rounded-xl my-4'>
                        <h2 className='text-2xl'>Description</h2>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Description Title</span>
                            </label>
                            <input type="text" name="description_title" placeholder={description?.description_title} className="input input-bordered input-sm w-full h-14 bg-slate-50" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Description</span>
                            </label>
                            <textarea name="description_details" placeholder={description?.description_details} className="textarea textarea-bordered textarea-sm w-full h-24 bg-slate-50"></textarea>

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Specific Description</span>
                            </label>
                            <textarea name="specificDescription" placeholder={description?.specificDescription} className="textarea textarea-bordered textarea-sm w-full h-24 bg-slate-50"></textarea>

                        </div>
                    </section>


                    {/* Product images */}
                    {/* <section className='bg-white p-5 rounded-xl my-4'>
                        <h2 className='text-slate-500 font-bold mb-4'>Product Images</h2>
                        <div className='flex justify-center items-center'>
                            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-4'>
                                {
                                    images.map(i =>
                                        <div key={i._id} className='relative w-32 h-32 lg:w-40 lg:h-40 md:w-40 md:h-40 rounded-xl'>
                                            <img className="w-full h-full object-cover rounded-xl" src={i.url} alt="Uploaded" style={{ width: '200px' }} />
                                            <button type='button' onClick={() => handleDeleteImage(i._id, i.url)} className="bg-red-600 p-0.5 text-white absolute -right-1 -top-1 rounded-full">
                                                <span className=''><RxCross2 /></span>
                                            </button>
                                        </div>
                                    )
                                }
                                <div className='w-32 h-32 lg:w-40 lg:h-40 border border-slate-400 border-dashed rounded-xl flex justify-center items-center'>
                                    <span className='text-6xl text-slate-300'><FaRegImages />
                                    </span>
                                    <input type="file" onChange={handleImageChange} className="absolute w-40 h-40 opacity-0 cursor-pointer" accept="image/*" />
                                </div>

                            </div>
                        </div>
                    </section> */}

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

export default EditProduct;