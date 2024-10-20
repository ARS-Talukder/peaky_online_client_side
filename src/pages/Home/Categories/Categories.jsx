import React from 'react';
import Category from './Category';

const Categories = () => {
    const items = [
        { _id: 1, name: "Bags", img: "https://i.ibb.co.com/1LdzzMV/bagpack.jpg" },
        { _id: 2, name: "Textiles", img: "https://i.ibb.co.com/vQB7RY6/textiles.jpg" },
        { _id: 3, name: "Foods", img: "https://i.ibb.co.com/47sfgGN/food.jpg" },
        { _id: 4, name: "Drinks", img: "https://i.ibb.co.com/bzSmZJp/drinks.jpg" },
        { _id: 5, name: "Electronics", img: "https://i.ibb.co.com/2kBvXsC/electronics.jpg" },
        { _id: 6, name: "Mobiles", img: "https://i.ibb.co.com/wQ7hqgs/mobile.jpg" },
        { _id: 7, name: "Laptops", img: "https://i.ibb.co.com/zsMGhf1/laptop.jpg" },
        { _id: 8, name: "Watch", img: "https://i.ibb.co.com/DpGx2w0/polex.jpg" },
        { _id: 10, name: "Shoes", img: "https://i.ibb.co.com/Yd2xMgZ/white-shoe.jpg" },
        { _id: 12, name: "Clothes", img: "https://i.ibb.co.com/w0r9yLH/Clothes.jpg" },
    ]

    return (
        <div className='flex justify-center overflow-x-scroll no-scrollbar mb-6'>
            {items.map(item => <Category key={item._id} item={item}></Category>)}
        </div>
    );
};

export default Categories;