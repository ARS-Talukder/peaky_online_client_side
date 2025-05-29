import React, { useEffect, useState } from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useCart, useDispatchCart } from '../../ContextReducer';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { dataLayer } from 'react-gtm-module';
import CartDrawer from './Cart/CartDrawer/CartDrawer';

const Product = ({ product }) => {
    const { _id, name, category, images, price, discount, shippingCharge, size, productColor } = product;
    const discount_price = price - ((discount * price) / 100);
    const navigate = useNavigate();
    const img = images[0]?.url;

    // Cart Drawer open and close handling
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const navigateToProductsDetails = () => {
        navigate(`/product/${_id}`, { state: product })

    }

    const handleOrderNow = async () => {
        if (size.length > 0 || productColor.length > 0) {
            navigate(`/product/${_id}`, { state: product })
            return

        }
        await dispatch({ type: "ADD", product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, size: size, productColor: productColor, shippingCharge: shippingCharge, quantity: 1 });
        toast.success('Added')
        navigate('/cart', { state: product })

        // Clear previous ecommerce data before pushing the new product
        window.dataLayer.push({ ecommerce: null });

        // Pushing Data to the Data Layer for Google data manager(GTM)
        window.dataLayer.push({
            event: 'begin_checkout',
            gtm: {
                uniqueEventId: new Date().getTime(), // Ensure unique event ID
                historyChangeSource: "pushState",
                oldHistoryState: null, // Reset old history state
                newHistoryState: { usr: null, key: "new_key", idx: 2 }, // Keep new state
            },
            ecommerce: {
                currency: 'BDT',
                value: parseFloat(price),
                items: [{ product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, size: size, productColor: productColor, shippingCharge: shippingCharge, quantity: 1 }]
            },
            buttonText: 'Order Now',
            buttonClick: 'Clicked',
            pagePath: window.location.pathname,
        });

    }

    let productAdded = false;

    let dispatch = useDispatchCart();
    let data = useCart();

    const handleAddToCart = async () => {
        if (size.length > 0 || productColor.length > 0) {
            navigate(`/product/${_id}`, { state: product })
            return

        }
        await dispatch({ type: "ADD", product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, shippingCharge: shippingCharge, quantity: 1 });
        setIsDrawerOpen(true);

        // Clear previous ecommerce data before pushing the new product
        window.dataLayer.push({ ecommerce: null });

        // Pushing Data to the Data Layer for Google data manager(GTM)
        window.dataLayer.push({
            event: 'add_to_cart',
            gtm: {
                uniqueEventId: new Date().getTime(), // Ensure unique event ID
                historyChangeSource: "pushState",
                oldHistoryState: null, // Reset old history state
                newHistoryState: { usr: null, key: "new_key", idx: 2 }, // Keep new state
            },
            ecommerce: {
                currency: 'BDT',
                value: parseFloat(price),
                items: [{ product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, shippingCharge: shippingCharge, quantity: 1 }]
            },
            buttonText: 'Add To Cart',
            buttonClick: 'Clicked',
            pagePath: window.location.pathname,
        });
    }

    if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            const data_id = data[i].product_id;
            if (data_id === _id) {
                productAdded = true
            }
        }
    }


    return (
        <div className='text-slate-500 font-bold text-center border-2 rounded hover:border-blue-500 pt-1 relative'>
            {/* Overlay. It creates darker the page when drawer opens */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
                    onClick={() => setIsDrawerOpen(false)} 
                ></div>
            )}
            <div>
                <div onClick={navigateToProductsDetails}>
                    <div className='h-48 px-1'>
                        <img className='w-full h-full' src={img} alt="" />
                    </div>
                    <p><small>{name}</small></p>
                    <div className='flex justify-center'>
                        <p className={price == discount_price ? 'flex items-center justify-center decoration-2 mr-2' : 'flex items-center justify-center font-normal line-through decoration-2 mr-2'}>
                            <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                            <span>{price}</span>
                        </p>
                        <p className={price == discount_price ? 'hidden' : 'flex justify-center items-center'}>
                            <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                            <span>{discount_price}</span>
                        </p>
                    </div>
                </div>
                <div className='px-2'>
                    <button onClick={handleOrderNow} className='mt-1 flex justify-center items-center w-full h-9 bg-blue-500 hover:bg-blue-600 text-white'><span>ORDER NOW</span></button>
                    {
                        productAdded === false ?
                            <button onClick={handleAddToCart} className='my-1 flex justify-center items-center w-full h-9 bg-red-500 hover:bg-red-600 text-white rounded'><span>Add To Cart</span></button>
                            :
                            <button className='my-1 flex justify-center items-center w-full h-9 bg-red-300 text-white rounded' disabled><span>Added</span></button>
                    }
                </div>
            </div>
            {
                discount != 0 &&
                <div className='font-normal bg-blue-500 px-2 text-white rounded-xl absolute top-3 right-3'>
                    <p><small>-{discount} %</small></p>
                </div>
            }

            {/* Free Shipping Badge */}
            {
                shippingCharge !== 'normal' && discount != 0 &&
                <div className='font-bold bg-green-700 px-2 flex items-center text-white rounded py-0.5 absolute top-10 right-3'>
                    <p><small>FREE DELIVERY</small></p>
                </div>
            }


            <CartDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </div>
    );
};

export default Product;