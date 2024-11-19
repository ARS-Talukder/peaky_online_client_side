import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='bg-white'>
            {/* ----------------1st Section------------ */}


            {/* ----------------2nd Section------------ */}
            <div className="drawer lg:drawer-open">
                <input id="dashboard-side-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-------------- Page content here -----------> */}
                    <div className='w-full h-full dashboard-default-content'>
                        {/* Outlet is the Part of Nested Routes */}
                        <Outlet></Outlet>

                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-side-drawer" className="drawer-overlay"></label>
                    <ul className="menu pb-4 pt-40 lg:pt-4 md:pt-24 px-2 overflow-y-auto w-1/2 lg:w-full md:w-1/3 h-full bg-blue-300">
                        {/* <!--------- Sidebar content here -----------> */}
                        <li><Link to='/admin_dashboard' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>Products List</Link></li>
                        <li><Link to='/admin_dashboard/add_product' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>Add Product</Link></li>
                        <li><Link to='/admin_dashboard/categories_list' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>Categories List</Link></li>
                        <li><Link to='/admin_dashboard/add_category' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>Add Category</Link></li>
                        <li><Link to='/admin_dashboard/all_orders' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>All Orders</Link></li>
                        <li><Link to='/admin_dashboard/all_customers' className='w-full btn mb-3 bg-blue-500 hover:bg-blue-600 text-white border-0'>All Customers</Link></li>

                    </ul>

                </div>
            </div>


            {/* -----------------------Footer Section------------------------- */}
            {/* <Footer></Footer> */}

        </div>
    );
};

export default AdminDashboard;