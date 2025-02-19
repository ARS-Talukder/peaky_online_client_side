import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

const CategoryTable = ({ index, category, refetch }) => {
    <button onClick={() => handleDelete(_id)}>
        <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
    </button>
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
        <tr className='text-slate-600 font-bold'>
            <th className='border'>{index + 1}</th>
            <td className='border'>
                <div className='flex items-center'>
                    <span>{name}</span>
                </div>
            </td>

            <td className='border'>
                <div className='flex items-center'>
                    <span className='mr-4'><img src={img} width={40} alt="product_img" /></span>
                </div>
            </td>

            <td className='border'>
                <button className='p-1 bg-green-100 rounded mx-2' title="Edit">
                    <MdEdit className="text-2xl text-green-500"></MdEdit>
                </button>

                <button onClick={() => handleDelete(_id)} className='p-1 bg-red-100 rounded' title="Delete">
                    <AiFillDelete className="text-2xl text-red-500"></AiFillDelete>
                </button>
            </td>
        </tr>
    );
};

export default CategoryTable;