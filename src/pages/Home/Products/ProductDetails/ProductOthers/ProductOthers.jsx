import React from 'react';

const ProductOthers = ({ product }) => {
    const { images, description } = product;
    console.log(description)
    const { description_title, description_details, specificDescription } = description;
    return (
        <div className='w-2/3 mx-auto py-10'>
            <h2 className='text-xl font-bold'>Description</h2>
            <h3 className='text-xl font-bold my-2'>{description_title}</h3>
            <h3 className='text-slate-500 font-bold my-4'>{description_details}</h3>

            <h4 className='font-bold'>Specification:</h4>
            <div className='text-slate-600 px-3 my-4'>
                <small>
                    <ul>
                        {
                            specificDescription.map(s => <li key={s._id} className='my-3'>
                                <span className='mr-2'>👉</span>
                                <span>{s.text}</span>
                            </li>)
                        }
                    </ul>
                </small>
            </div>
            <div className='my-8'>
                {
                    images.map(i => <img key={i._id} src={i.url} alt="product" />)
                }
            </div>
        </div>
    );
};

export default ProductOthers;