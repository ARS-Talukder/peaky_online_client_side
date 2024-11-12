import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryItems = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <div>
            <h2>sjsjsjsj</h2>
        </div>
    );
};

export default CategoryItems;