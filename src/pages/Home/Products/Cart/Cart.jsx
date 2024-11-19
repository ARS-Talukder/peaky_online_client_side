import React, { useState } from 'react';
import CartProduct from './CartProduct';
import { useCart, useDispatchCart } from '../../../ContextReducer';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {
    let data = useCart();
    let dispatch = useDispatchCart();
    const navigate = useNavigate();
    const [shipping, setShipping] = useState(130);
    let subTotal = 0;


    let date = new Date().toLocaleDateString("de-DE");
    const time = new Date().toLocaleTimeString();

    let content;
    if (data.length === 0) {
        return (
            <div className='h-80 flex justify-center items-center'>
                <h2 className='text-xl font-bold text-blue-500'>Your Cart is Empty!!</h2>
            </div>
        )
    }
    else {
        content = data.map((product, index) =>
            <CartProduct index={index} key={product.product_id} product={product}></CartProduct>
        )
        //This loop is for counting SubTotal of all cart products
        for (let i = 0; i < data.length; i++) {
            const discountPrice = data[i].discount_price;
            const quantity = data[i].quantity;
            const multiplication = discountPrice * quantity;
            subTotal = subTotal + multiplication;
        }
    }
    const handleShipping = (e) => {
        if (e.target.value === 'outside_dhaka') {
            setShipping(130)
        }
        if (e.target.value === 'inside_dhaka') {
            setShipping(60)
        }
    }

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        const customerName = e.target.name.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const shipping_cost = shipping;
        const order = { customerName: customerName, address: address, subTotal: subTotal, shipping: shipping_cost, total: subTotal + shipping, phone: phone, products: data, email: email, date: date, time: time };
        //Post an order
        fetch('https://peaky-online-server-side.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('অভিনন্দন। আপনার অর্ডার সম্পন্ন হয়েছে।');
                    dispatch({ type: "CLEAR" })
                    navigate('/')
                }
                else {
                    toast.error('দুঃখিত। অর্ডার সম্পন্ন হয়নি। দয়া করে আবার চেষ্টা করুন।')
                    console.log(data)
                }
            })

        const customer = { name: customerName, address: address, phone: phone, email: email, role: 'customer' };
        //Post a customer
        fetch(`https://peaky-online-server-side.onrender.com/customers/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
    }

    return (
        <div className='lg:flex md:flex px-6 py-4 lg:px-20 md:px-4 lg:py-10'>
            {/* ------Form Section------ */}
            <div className='lg:w-1/3 lg:mr-8 md:w-1/3 md:mr-4 border rounded px-3 py-2'>
                <h3 className='text-slate-500 text-center mb-4'><small>অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে <span className='text-purple-500 font-bold'>অর্ডার কনফার্ম করুন</span> বাটনে ক্লিক করুন</small></h3>
                <form onSubmit={handleConfirmOrder} action="">
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
                        <select defaultValue={'outside_dhaka'} onChange={handleShipping} name='area' className="select select-bordered select-sm w-full">
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
                            <span className="label-text text-slate-500 font-bold">আপনার ই-মেইল</span>
                        </label>
                        <input type="email" name="email" placeholder="ই-মেইল লিখুন" className="input input-sm input-bordered w-full" required />

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
                                content
                            }
                            <tr className='font-bold'>
                                <td className='text-right' colSpan={2}></td>
                                <td className='text-center'>Sub Total</td>
                                <td>{subTotal}</td>
                            </tr>
                            <tr className='font-bold'>
                                <td className='text-right' colSpan={2}></td>
                                <td className='text-center'>Shipping Cost</td>
                                <td>{shipping}</td>
                            </tr>
                            <tr className='font-bold'>
                                <td className='text-right' colSpan={2}></td>
                                <td className='text-center'>Total</td>
                                <td>{subTotal + shipping}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Cart;