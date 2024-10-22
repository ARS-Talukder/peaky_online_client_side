import React from 'react';
import Product from './Product';

const Products = () => {

    const products = [
        { _id: 1, name: "Set Menu", category: "Foods", price: 300, discount: 50, img: "https://i.ibb.co.com/G2PRMP2/set-menu.jpg" },
        { _id: 2, name: "Formal Shirt", category: "Clothes", price: 300, discount: 25, img: "https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg" },
        { _id: 3, name: "Oppo F25", category: "Mobiles", price: 450, discount: 25, img: "https://i.ibb.co.com/F5XD1KY/oppo-f25.jpg" },
        { _id: 4, name: "Realme C65", category: "Mobiles", price: 300, discount: 0, img: "https://i.ibb.co.com/7tKxP2Q/realme-c65.jpg" },
        { _id: 5, name: "HP Zenbook", category: "Laptops", price: 300, discount: 15, img: "https://i.ibb.co.com/x3svWPP/hp-zenbook.jpg" },
        { _id: 6, name: "Macbook Air", category: "Laptops", price: 300, discount: 25, img: "https://i.ibb.co.com/G7FCQ17/macbook-air.jpg" },
        { _id: 7, name: "Samsung S22 Ultra", category: "Mobiles", price: 820, discount: 10, img: "https://i.ibb.co.com/BNdsSRF/samsung-s22.jpg" },
        { _id: 8, name: "Iphone 8 Pro", category: "Mobiles", price: 300, discount: 25, img: "https://i.ibb.co.com/g9NtXdY/ipone-8pro.jpg  " },
        { _id: 9, name: "Soft Drinks", category: "Drinks", price: 300, discount: 30, img: "https://i.ibb.co.com/n0HgKtY/soft-Drinks.jpg" },
        { _id: 10, name: "Cappuccino", category: "Drinks", price: 300, discount: 25, img: "https://i.ibb.co.com/6Rk84n5/cappuccino.jpg" },
        { _id: 11, name: "Lemon Mint", category: "Drinks", price: 300, discount: 25, img: "https://i.ibb.co.com/DLgMCbG/lemon-mint.jpg" },
        { _id: 12, name: "Simple Bag", category: "Bags", price: 300, discount: 25, img: "https://i.ibb.co.com/X5Jbj3F/simple-bag.jpg" },
        { _id: 13, name: "Luggage", category: "Bags", price: 300, discount: 25, img: "https://i.ibb.co.com/N32bkVf/luggage.jpg" },
        { _id: 14, name: "JBL 97H", category: "Electronics", price: 300, discount: 25, img: "https://i.ibb.co.com/x67fqSg/jbl-97h.jpg" },
        { _id: 15, name: "Titan", category: "Watch", price: 300, discount: 25, img: "https://i.ibb.co.com/1X3mXSg/titan.jpg" },
        { _id: 16, name: "Burger", category: "Foods", price: 300, discount: 25, img: "https://i.ibb.co.com/XZXXf2B/burger.jpg" },
        { _id: 17, name: "Belt Watch", category: "Watch", price: 300, discount: 25, img: "https://i.ibb.co.com/94GchdL/belt-Watch.jpg" },
        { _id: 18, name: "Rolex", category: "Watch", price: 300, discount: 25, img: "https://i.ibb.co.com/DpGx2w0/polex.jpg" },
        { _id: 19, name: "White Shoe", category: "Shoes", price: 300, discount: 25, img: "https://i.ibb.co.com/Yd2xMgZ/white-shoe.jpg" },
        { _id: 20, name: "Causal Shirt", category: "Clothes", price: 300, discount: 25, img: "https://i.ibb.co.com/vwnhCbd/formal-casual-mixed.jpg" },
        { _id: 21, name: "JBL 3G", category: "Electronics", price: 300, discount: 25, img: "https://i.ibb.co.com/QM5mxmS/jbl-3g.jpg" },
        { _id: 22, name: "Travel Bag", category: "Bags", price: 300, discount: 25, img: "https://i.ibb.co.com/QcQGNcr/travel-bag.jpg" },
        { _id: 23, name: "Pizza", category: "Foods", price: 300, discount: 25, img: "https://i.ibb.co.com/Fww4pd4/pizza.jpg" },
        { _id: 24, name: "Red Shoe", category: "Shoes", price: 300, discount: 25, img: "https://i.ibb.co.com/68h1z15/red-shoe.jpg" },
        { _id: 25, name: "White T-Shirt", category: "Clothes", price: 300, discount: 25, img: "https://i.ibb.co.com/Sv493t8/white-tshirt.jpg" },
        { _id: 26, name: "Cap T-shirt Combo", category: "Clothes", price: 300, discount: 25, img: "https://i.ibb.co.com/TMy6VHF/cap-tshirt-combo.jpg" },
        { _id: 27, name: "Cloth Bag", category: "Bags", price: 300, discount: 25, img: "https://i.ibb.co.com/zn1Zxht/cloth-bag.jpg" },
        { _id: 28, name: "Raksin Bag", category: "Bags", price: 300, discount: 25, img: "https://i.ibb.co.com/R6gtjkk/Raksin-bag.jpg" },
    ]
    return (
        <div className='mb-6 px-5 lg:px-16 md:px-8'>
            <h2 className='text-2xl font-bold text-black mb-2'>Products</h2>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-5'>
                {products.map(product => <Product key={product._id} product={product}></Product>)}
            </div>

        </div>
    );
};

export default Products;