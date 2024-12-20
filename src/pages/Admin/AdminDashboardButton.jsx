import React from 'react';

const AdminDashboardButton = () => {
    return (
        <div className=' flex justify-end lg:hidden'>
            <label htmlFor="dashboard-side-drawer" tabIndex="0" className="btn btn-ghost text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default AdminDashboardButton;