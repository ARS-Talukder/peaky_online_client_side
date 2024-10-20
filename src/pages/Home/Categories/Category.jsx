import React from 'react';

const Category = ({ item }) => {
    const { name, img } = item;
    return (
        <div className='mx-5'>
            <div className="avatar">
                <div className="w-24 border border-4 border-blue-300 hover:border-blue-500 rounded-full">
                    <img className='w-full text-center' src={img} alt='category_img' />
                </div>
            </div>

            <div>
                <p className='text-center font-bold'><small>{name}</small></p>
            </div>
        </div>
    );
};

export default Category;