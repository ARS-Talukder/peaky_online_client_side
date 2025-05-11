import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useCart, useDispatchCart } from '../../../ContextReducer';
import { Link, useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct';
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const Checkout = () => {
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

        // Clear previous ecommerce data before pushing the new product
        window.dataLayer.push({ ecommerce: null });

        // Pushing Data to the Data Layer for Google data manager(GTM)
        window.dataLayer.push({
            event: 'view_cart',
            gtm: {
                uniqueEventId: new Date().getTime(), // Ensure unique event ID
                historyChangeSource: "pushState",
                oldHistoryState: null, // Reset old history state
                newHistoryState: { usr: null, key: "new_key", idx: 2 }, // Keep new state
            },
            ecommerce: {
                currency: 'BDT',
                items: data
            },
            pagePath: window.location.pathname,
        });


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

        const orderID = Math.floor(10000000 + Math.random() * 90000000);

        const customerName = e.target.name.value;
        const street = e.target.street.value;
        const thana = e.target.thana.value;
        const district = e.target.district.value;
        const phone = e.target.phone.value;
        const shipping_cost = shipping;
        const order = { customerName: customerName, orderID, address: { street, thana, district }, subTotal: subTotal, shipping: shipping_cost, total: subTotal + shipping, phone: phone, products: data, date: date, time: time, status: 'pending', status_color: 'yellow' };

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
                    toast.success("Congratulations! Your order's completed");
                    dispatch({ type: "CLEAR" })
                    navigate('/confirmed', { state: orderID })
                }
                else {
                    toast.error('Sorry! Try again')
                    console.log(data)
                }
            })

        const customer = { name: customerName, email: "No Email", address: { street, thana, district }, phone: phone };
        //Post a customer
        fetch(`http://localhost:5000/customers/${phone}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })


        // Clear previous ecommerce data before pushing the new product
        window.dataLayer.push({ ecommerce: null });

        // Pushing Data to the Data Layer for Google data manager(GTM)
        window.dataLayer.push({
            event: 'purchase',
            orderID: orderID,
            transactionId: '',
            gtm: {
                uniqueEventId: new Date().getTime(), // Ensure unique event ID
                historyChangeSource: "pushState",
                oldHistoryState: null, // Reset old history state
                newHistoryState: { usr: null, key: "new_key", idx: 2 }, // Keep new state
            },
            ecommerce: {
                currency: 'BDT',
                value: parseFloat(subTotal),
                shipping: parseFloat(shipping_cost),
                items: [order]
            },
            buttonText: 'Confirm Order',
            buttonClick: 'Clicked',
            pagePath: window.location.pathname,
        });
    }
    return (
        <div className='flex flex-col-reverse lg:flex-row md:flex-row justify-center px-6 py-4 lg:px-20 md:px-4 lg:py-10'>
            {/* ------Form Section------ */}
            <div className='lg:w-1/3 lg:mr-8 md:w-1/3 md:mr-4 border rounded px-3 py-2'>
                <h3 className='text-slate-500 text-center mb-4'>Give all the information bellow & then click <span className='text-purple-500 font-bold'>Confirm Order</span> button</h3>
                <form onSubmit={handleConfirmOrder} action="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">Your Name (আপনার নাম)</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-sm input-bordered w-full" required />

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-2 md:gap-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Street</span>
                            </label>
                            <input type="text" name="street" className="input input-bordered input-sm w-full" placeholder='Street' required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-500 font-bold">Thana</span>
                            </label>
                            <input type="text" name="thana" placeholder='Thana' className="input input-bordered input-sm w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">District</span>
                        </label>
                        <input type="text" name="district" placeholder="Enter your address" className="input input-sm input-bordered w-full" required />

                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">Select Your Area (এরিয়া সিলেক্ট করুন)</span>
                        </label>
                        <select defaultValue={'outside_dhaka'} onChange={handleShipping} name='area' className="select select-bordered select-sm w-full">
                            <option value="outside_dhaka">Outside Dhaka (ঢাকার বাইরে)</option>
                            <option value="inside_dhaka">Inside Dhaka (ঢাকার ভিতরে)</option>
                        </select>
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">Mobile (মোবাইল নাম্বার)</span>
                        </label>
                        <input type="number" name="phone" placeholder="Enter your phone number" className="input input-sm input-bordered w-full" required />

                    </div>

                    <input className='btn w-full mt-4 text-white bg-blue-500 hover:bg-blue-600' type="submit" value="Confirm Order" />
                </form>
            </div>

            {/* ------Products Section------ */}
            <div className='w-full lg:w-1/4'>
                <div className='border py-1 px-8 my-4'>
                    <div className='flex justify-between my-4'>
                        <p className='font-bold'><small>Subtotal</small></p>
                        <p className='font-bold flex justify-center items-center'>
                            <span className='text-xs'><FaBangladeshiTakaSign /></span>
                            <span><small>{subTotal}</small></span>
                        </p>
                    </div>
                    <hr />
                    <div className='flex justify-between my-6 text-slate-500'>
                        <p className='font-bold'><small>Shipping</small></p>
                        <p className='flex justify-center items-center'>
                            <span className='text-xs'><FaBangladeshiTakaSign /></span>
                            <span><small>{shipping}</small></span>
                        </p>
                    </div>
                    <hr />
                    <div className='flex justify-between my-4'>
                        <p className='font-bold text-red-600'><small>Total</small></p>
                        <p className='font-bold text-red-600 flex justify-center items-center'>
                            <span className='text-xs'><FaBangladeshiTakaSign /></span>
                            <span>{subTotal + shipping}</span>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;