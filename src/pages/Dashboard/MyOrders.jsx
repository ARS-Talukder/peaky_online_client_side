import React from 'react';
import OrderProduct from './OrderProduct';

const MyOrders = () => {
    const cartProducts = [
        { _id: 3, name: "Oppo F25", category: "Mobiles", price: 450, discount: 25, quantity: 1,order_date:"23-10-24", img: "https://i.ibb.co.com/F5XD1KY/oppo-f25.jpg" },
        { _id: 4, name: "Realme C65", category: "Mobiles", price: 300, discount: 0, quantity: 1,order_date:"23-10-24", img: "https://i.ibb.co.com/7tKxP2Q/realme-c65.jpg" },
        { _id: 7, name: "Samsung S22 Ultra", category: "Mobiles", price: 820, discount: 10, quantity: 1,order_date:"23-10-24", img: "https://i.ibb.co.com/BNdsSRF/samsung-s22.jpg" }
    ]
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Order Date</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.map((product, index) => <OrderProduct index={index} key={product._id} product={product}></OrderProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;