import React from 'react';

const Customer = ({ customer, index }) => {
    const { name, email, phone } = customer;
    return (
        <tr className='text-slate-600 font-bold'>
            <th className='border'>{index + 1}</th>
            <td className='border flex items-center'>
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary">
                        <img src="https://i.ibb.co/ctFS6Qt/login-Avatar.png" />
                    </div>
                </div>
                <p className='ml-4'>{name}</p>
            </td>
            <td className='border'>{email === 'No Email' ? <span className='text-red-500'>N/A</span> : <span>{email}</span>}</td>
            <td className='border'>{phone === 'No Mobile Number' ? <span className='text-red-500'>N/A</span> : <span>{phone}</span>}</td>
        </tr>
    );
};

export default Customer;