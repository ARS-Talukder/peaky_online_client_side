import React, { useState } from 'react';
import CartProduct from './CartProduct';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {
    const navigate = useNavigate();
    const [shipping, setShipping] = useState(130);
    const [quantity, setQuantity] = useState(1);
    const { state } = useLocation();
    const product = state;
    const discount_price = product.price - ((product.discount * product.price) / 100);


    function handleTotal(quantity, state) {
        if (state === "increment") {
            setQuantity(quantity + 1);
        }
        if (state === "decrement") {
            setQuantity(quantity - 1);
        }

    }
    console.log(product)


    let date = new Date().toLocaleDateString("de-DE");
    const time = new Date().toLocaleTimeString();

    let content;
    content = <CartProduct product={product} handleTotal={handleTotal}></CartProduct>

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
        const shipping_cost = shipping;
        const order = { customerName: customerName, address: address, shipping: shipping_cost, subTotal: discount_price * quantity, total: (discount_price * quantity) + shipping, phone: phone, products: [{ product_id: product._id, name: product.name, category: product.category, img: product.img, price: product.price, discount: product.discount, discount_price: discount_price, quantity: quantity, }], date: date, time: time, status: 'pending', status_color: 'yellow' };
        //Post an order
        fetch('http://localhost:5000/orders', {
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
                    navigate('/')
                }
                else {
                    toast.error('দুঃখিত। অর্ডার সম্পন্ন হয়নি। দয়া করে আবার চেষ্টা করুন।')
                    console.log(data)
                }
            })
    }

    return (
        <div className='lg:flex md:flex px-6 py-4 lg:px-20 md:px-4 lg:py-10'>
            {/* ------Form Section------ */}
            <div className='lg:w-1/3 lg:mr-8 md:w-1/3 md:mr-4 border rounded px-3 py-2'>
                <h3 className='text-slate-500 text-center mb-4'><small>কোনো ধরনের অগ্রীম পেমেন্ট ছাড়া <span className='text-purple-500 font-bold'>ক্যাশ অন ডেলিভারিতে </span>অর্ডার করতে নিচে আপনার তথ্য দিন</small></h3>
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
                                <td className='text-center'>Shipping Cost</td>
                                <td>{shipping}</td>
                            </tr>
                            <tr className='font-bold'>
                                <td className='text-right' colSpan={2}></td>
                                <td className='text-center'>Total</td>
                                <td>{(discount_price * quantity) + shipping}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Cart;