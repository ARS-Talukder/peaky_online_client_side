import React from 'react';
import { TiEdit } from "react-icons/ti";
import { IoMdAddCircleOutline } from "react-icons/io";


const MyProfile = () => {
    return (
        <div className="overflow-x-auto px-2 flex justify-center">
            <table className="table w-2/3 border text-slate-600">
                <tr className='border'>
                    <th className='border'>Name:</th>
                    <td className='flex items-center'>
                        <span>Shadhin</span>
                        <button className='ml-2'><span className='text-2xl'><TiEdit></TiEdit></span></button>
                    </td>
                </tr>
                <tr className='border'>
                    <th className='border'>Email:</th>
                    <td>talukderars@gmail.com</td>
                </tr>
                <tr className='border'>
                    <th className='border'>Mobile:</th>
                    <td className='flex items-center'>
                        <div>
                            <p>01629396785</p>
                            <p>01629396785</p>
                        </div>
                        <button className='ml-2'>
                            <span className='text-2xl'><IoMdAddCircleOutline></IoMdAddCircleOutline></span>
                        </button>
                    </td>
                </tr>
                <tr className='border'>
                    <th className='border'>Address:</th>
                    <td className='flex items-center'>
                        <span>Sirajganj Sadar, Sirajganj</span>
                        <button className='ml-2'><span className='text-2xl'><TiEdit></TiEdit></span></button>
                    </td>
                </tr>
                <tr className='border'>
                    <th className='border'>Designation:</th>
                    <td>Customer</td>
                </tr>
            </table>
        </div>
    );
};

export default MyProfile;