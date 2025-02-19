import React from 'react';

const Customer = ({ customer, index }) => {
    const { name, email, phone } = customer;
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    );
};

export default Customer;