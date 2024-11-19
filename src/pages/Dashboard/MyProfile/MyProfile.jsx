import React, { useEffect, useState } from 'react';
import { TiEdit } from "react-icons/ti";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DashboardButton from '../DashboardButton';


const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    // const [customers, setCustomers] = useState([]);
    let mobile = "No Number"
    let address = "No Address"
    let designation = ""
    const { data: customers, isLoading, isSuccess, isError, refetch } = useQuery({
        queryKey: ["customers"],
        queryFn: () => {
            return axios.get("https://peaky-online-server-side.onrender.com/customers")
        }
    })

    if (loading || isLoading) {
        return <Loading></Loading>
    }
    if (customers.data.length !== 0) {
        customers.data.filter((order) => {
            if (order.email == user.email) {
                address = order.address;
                mobile = order.phone
                designation = order.role
            }
        })
    }

    const handleEditMobile = () => {
        let proceed = window.prompt("Enter Your Mobile Number");
        const phone = proceed;
        const data = { phone };
        if (proceed === null || proceed === "") {
            return
        }
        else {
            fetch(`https://peaky-online-server-side.onrender.com/customer-mobile/${user.email}`, {
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
    const handleEditAddress = () => {
        let proceed = window.prompt("Enter Your Address");
        const address = proceed;
        const data = { address };
        if (proceed === null || proceed === "") {
            return
        }
        else {
            fetch(`https://peaky-online-server-side.onrender.com/customer-address/${user.email}`, {
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

    return (
        <div className='py-2'>
            {/* ---------------Dashboard Button------------- */}
            <DashboardButton></DashboardButton>
            <div className="overflow-x-auto px-2 flex justify-center">
                <table className="table w-2/3 border text-slate-600">
                    <tr className='border'>
                        <th className='border'>Name:</th>
                        <td className='flex items-center'>
                            <span>{user.displayName}</span>
                        </td>
                    </tr>
                    <tr className='border'>
                        <th className='border'>Email:</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr className='border'>
                        <th className='border'>Mobile:</th>
                        <td className='flex items-center'>
                            <div>
                                <p>{mobile}</p>
                            </div>
                            <button className='ml-2' onClick={handleEditMobile}>
                                <span className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800"><TiEdit></TiEdit></span>
                            </button>
                        </td>
                    </tr>
                    <tr className='border'>
                        <th className='border'>Address:</th>
                        <td className='flex items-center'>
                            <span>{address}</span>
                            <button className='ml-2' onClick={handleEditAddress}>
                                <span className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800"><TiEdit></TiEdit></span>
                            </button>
                        </td>
                    </tr>
                    <tr className='border'>
                        <th className='border'>Designation:</th>
                        <td>{designation}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;