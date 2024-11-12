import React from 'react';
import CartProduct from './CartProduct';

const Cart = () => {
    const cartProducts = [
        { _id: 3, name: "Oppo F25", category: "Mobiles", price: 450, discount: 25, quantity: 1, img: "https://i.ibb.co.com/F5XD1KY/oppo-f25.jpg" },
        { _id: 4, name: "Realme C65", category: "Mobiles", price: 300, discount: 0, quantity: 1, img: "https://i.ibb.co.com/7tKxP2Q/realme-c65.jpg" },
        { _id: 7, name: "Samsung S22 Ultra", category: "Mobiles", price: 820, discount: 10, quantity: 1, img: "https://i.ibb.co.com/BNdsSRF/samsung-s22.jpg" }
    ]
    return (
        <div className='lg:flex md:flex px-6 py-4 lg:px-20 md:px-4 lg:py-10'>
            {/* ------Form Section------ */}
            <div className='lg:w-1/3 lg:mr-8 md:w-1/3 md:mr-4 border rounded px-3 py-2'>
                <h3 className='text-slate-500 text-center mb-4'><small>অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে <span className='text-purple-500 font-bold'>অর্ডার কনফার্ম করুন</span> বাটনে ক্লিক করুন</small></h3>
                <form action="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার নাম</span>
                        </label>
                        <input type="text" name="name" placeholder="আপনার নাম লিখুন" className="input input-sm input-bordered w-full" required />

                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার ঠিকানা</span>
                        </label>
                        <input type="text" name="address" placeholder="আপনার ঠিকানা লিখুন" className="input input-sm input-bordered w-full" required />

                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার এরিয়া সিলেক্ট করুন</span>
                        </label>
                        <select defaultValue={'Default'} name='area' className="select select-bordered select-sm w-full">
                            <option value="outside_dhaka">ঢাকার বাইরে</option>
                            <option value="inside_dhaka">ঢাকার ভিতরে</option>
                        </select>
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার মোবাইল</span>
                        </label>
                        <input type="number" name="phone" placeholder="মোবাইল নম্বর লিখুন" className="input input-sm input-bordered w-full" required />

                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার ইমেইল</span>
                        </label>
                        <input type="email" name="email" placeholder="আপনার ইমেইল লিখুন" className="input input-sm input-bordered w-full" required />

                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-slate-500 font-bold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />

                </div> */}
                    {/* <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-slate-500 font-bold">Confirm Password</span>
                    </label>
                    <input type="password" name="confirm_password" placeholder="Password" className="input input-bordered w-full" required />

                </div> */}

                    <div className='mt-2 flex items-center'>
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className='text-purple-600 font-bold mx-2'>Create Account?</span>
                    </div>

                    <input className='btn w-full mt-4 text-white bg-blue-500 hover:bg-blue-600' type="submit" value="অর্ডার কনফার্ম করুন" />
                </form>
            </div>

            {/* ------Products Section------ */}
            <div className='lg:w-2/3 md:w-2/3 my-8 lg:my-0 md:my-0'>
                <div className="overflow-x-auto">
                    <table className="table border">
                        <thead>
                            <tr className='bg-base-200'>
                               <th className='text-center font-bold' colSpan={4}>আপনার অর্ডারসমূহ</th>
                            </tr>
                            <tr className=''>
                                <th className='text-center'>Product</th>
                                <th>Price</th>
                                <th className='text-center'>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartProducts.map((product) => <CartProduct key={product._id} product={product}></CartProduct>)
                            }
                            <tr className='font-bold'>
                                <td className='text-right' colSpan={2}></td>
                                <td className='text-center'>Sub Total</td>
                                <td>800</td>
                            </tr>
                            <tr className='font-bold'>
                                <td className='text-right' colSpan={2}></td>
                                <td className='text-center'>Shipping Cost</td>
                                <td>120</td>
                            </tr>
                            <tr className='font-bold'>
                                <td className='text-right' colSpan={2}></td>
                                <td className='text-center'>Total</td>
                                <td>8400</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Cart;