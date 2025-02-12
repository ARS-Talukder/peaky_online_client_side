import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";

const CategoryTable = ({ index, category, refetch }) => {
    const { _id, name, img } = category;
    const handleDelete = (id) => {
        const proceed = window.confirm('Do You Want to delete this category?');
        if (proceed) {
            fetch(`https://api.peakyonline.com/category-delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Category's been deleted");
                    refetch();
                })
        }
        else {
            return;
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><img src={img} width={35} alt="product_img" /></td>
            <td>
                <button onClick={() => handleDelete(_id)}>
                    <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                </button>
            </td>
        </tr>
    );
};

export default CategoryTable;