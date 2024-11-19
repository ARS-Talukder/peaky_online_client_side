import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";

const ProductTable = ({ index, product, refetch }) => {
    const { _id, name, category, img, price, discount } = product;
    const discount_price = price - ((discount * price) / 100);

    const handleEdit = (promptText, query, id) => {
        let proceed = window.prompt(promptText);
        const inputValue = proceed;
        const data = { query, inputValue }
        if (proceed === null || proceed === "") {
            return
        }
        else {
            fetch(`https://peaky-online-server-side.onrender.com/product/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => {
                return res.json()
            }).then(data => {
                refetch();

            })
        }
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Do You Want to delete this product?');
        if (proceed) {
            fetch(`https://peaky-online-server-side.onrender.com/product-delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Product's been deleted");
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
            <td>
                <div className='flex items-center'>
                    <span>{name}</span>
                    <button className='ml-2' onClick={() => handleEdit("Enter Product Name", "name", _id)}>
                        <span className="text-xl text-blue-600 cursor-pointer hover:text-blue-800"><TiEdit></TiEdit></span>
                    </button>
                </div>
            </td>
            <td>
                {category}
            </td>
            <td>
                <div className='flex items-center'>
                    <span>{price}</span>
                    <button className='ml-2' onClick={() => handleEdit("Enter New Price", "price", _id)}>
                        <span className="text-xl text-blue-600 cursor-pointer hover:text-blue-800"><TiEdit></TiEdit></span>
                    </button>
                </div>
            </td>
            <td>
                <div className='flex items-center'>
                    <span>{discount + "%"}</span>
                    <button className='ml-2' onClick={() => handleEdit("Enter Discount (Only Number)", "discount", _id)}>
                        <span className="text-xl text-blue-600 cursor-pointer hover:text-blue-800"><TiEdit></TiEdit></span>
                    </button>
                </div>
            </td>
            <td>{discount_price}</td>
            <td><img src={img} width={20} alt="product_img" /></td>
            <td>
                <button onClick={() => handleDelete(_id)}>
                    <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                </button>
            </td>
        </tr>
    );
};

export default ProductTable;