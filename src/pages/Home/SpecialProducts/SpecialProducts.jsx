import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import Loading from '../../Shared/Loading';
import { FaLongArrowAltRight } from "react-icons/fa";
import Product from '../Products/Product';
import CountdownTimer from '../../Shared/CountdownTimer';
import './SpecialProducts.css';

const SpecialProducts = () => {
    const { data: specialCategories, isLoading, isSuccess } = useQuery({
        queryKey: ["specialCategories"],
        queryFn: () => axios.get("https://api.peakyonline.com/special_categories")
    });
    console.log(specialCategories);

    // Google Tag Manager data layer push
    useEffect(() => {
        if (isSuccess && specialCategories?.data) {
            window.dataLayer.push({ ecommerce: null });
            window.dataLayer.push({
                event: "view_item_list",
                ecommerce: {
                    currency: 'BDT',
                    items: specialCategories.data
                },
                pagePath: window.location.pathname,
            });
        }
    }, [isSuccess, specialCategories]);

    if (isLoading) return <Loading />;

    // console.log(categories)

    return (
        <div className="space-y-10 mb-10">
            {isSuccess && specialCategories.data.map((category) => (
                <div key={category._id} className="">
                    {/* Category Title */}
                    <div className="relative mb-4">
                        {/* Category name on the left */}
                        <div className="absolute left-0">
                            <h2 className="text-2xl font-bold fire text-green-700">
                                🔥 {category.name}
                            </h2>
                        </div>

                        {/* Countdown timer centered */}
                        <div className="flex justify-center">
                            {category.startTime && category.endTime && (
                                <CountdownTimer
                                    startTime={category.startTime}
                                    endTime={category.endTime}
                                />
                            )}
                        </div>
                    </div>

                    {/* Products Grid */}
                    {category.products?.length > 0 ? (
                        <div className="bg-white p-5 rounded-xl shadow-[0_-4px_6px_rgba(0,0,0,0.1)] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                            {category.products.map((product) => (
                                <Product
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No products added yet.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SpecialProducts;