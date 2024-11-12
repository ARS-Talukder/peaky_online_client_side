import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, img } = category;
    const navigate = useNavigate();
    const navigateToInventory = name => {
        navigate(`/${name}`);
    }
    return (
        <div className='mx-5' onClick={() => navigateToInventory(name)}>
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