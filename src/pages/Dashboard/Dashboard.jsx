import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-1/6 bg-blue-200 h-screen py-4 px-3 mr-4">
                    <ul className="">
                        <li><Link to='/dashboard' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>My Profile</Link></li>
                        <li><Link to='/dashboard/my_orders' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>My Orders</Link></li>
                    </ul>

                </div>
                <div className="w-5/6 mt-2">
                    <div className='w-full h-full dashboard-default-content'>
                        {/* Outlet is the Part of Nested Routes */}
                        <Outlet></Outlet>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;