import React from 'react';

const OrderPage = () => {
    return (
        <div>
            {/* ----Form Section---- */}
            <div>
                <h3 className='text-slate-500'>অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে <span className='text-purple-500 font-bold'>অর্ডার কনফার্ম করুন</span> বাটনে ক্লিক করুন</h3>
                <form action="">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার নাম</span>
                        </label>
                        <input type="text" name="name" placeholder="আপনার নাম লিখুন" className="input input-sm input-bordered w-full max-w-xs" required />

                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার ঠিকানা</span>
                        </label>
                        <input type="text" name="address" placeholder="আপনার ঠিকানা লিখুন" className="input input-sm input-bordered w-full max-w-xs" required />

                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার এরিয়া সিলেক্ট করুন</span>
                        </label>
                        <select defaultValue={'Default'} name='area' className="select select-bordered select-sm w-full max-w-xs">
                            <option value="outside_dhaka">ঢাকার বাইরে</option>
                            <option value="inside_dhaka">ঢাকার ভিতরে</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার মোবাইল</span>
                        </label>
                        <input type="number" name="phone" placeholder="মোবাইল নম্বর লিখুন" className="input input-sm input-bordered w-full max-w-xs" required />

                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">আপনার ইমেইল</span>
                        </label>
                        <input type="email" name="email" placeholder="আপনার ইমেইল লিখুন" className="input input-sm input-bordered w-full max-w-xs" required />

                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />

                    </div> */}
                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-slate-500 font-bold">Confirm Password</span>
                        </label>
                        <input type="password" name="confirm_password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />

                    </div> */}

                    <div className='mt-2 flex items-center'>
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className='text-purple-600 font-bold mx-2'>Create Account?</span>
                    </div>

                    <input className='btn w-full max-w-xs mt-4 text-white bg-blue-500 hover:bg-blue-600' type="submit" value="অর্ডার কনফার্ম করুন" />
                </form>
            </div>

            {/* ----Products Section---- */}
            <div>

            </div>
        </div>
    );
};

export default OrderPage; <form action="">
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text text-slate-500 font-bold">Name</span>
        </label>
        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" required />

    </div>
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text text-slate-500 font-bold">Phone Number</span>
        </label>
        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />

    </div>
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text text-slate-500 font-bold">Email</span>
        </label>
        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" required />

    </div>
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text text-slate-500 font-bold">Password</span>
        </label>
        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />

    </div>
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text text-slate-500 font-bold">Confirm Password</span>
        </label>
        <input type="password" name="confirm_password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />

    </div>
    <input className='btn w-full max-w-xs mt-4 text-white bg-blue-500 hover:bg-blue-600' type="submit" value="Register" />
</form>