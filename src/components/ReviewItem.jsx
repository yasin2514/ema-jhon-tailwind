import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const ReviewItem = ({ product }) => {
    const { name, img, price, shipping } = product;

    return (
        <div className='md:flex gap-5 mt-10 items-center border rounded-xl p-3' >
            <img src={img} alt="" className='w-full h-52 md:w-48 md:h-32  shrink-0 object-cover rounded-lg ' />
            <div className='px-2 py-4 md:p-0 flex  justify-between items-center w-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-xl'>{name}</h1>
                    <p>Price: <span className='text-orange-500'>${price}</span></p>
                    <p>Shipping Charge: <span className='text-orange-500'>${shipping}</span></p>
                </div>
                <button className=' bg-red-100 hover:bg-red-200 rounded-full p-3'><TrashIcon className='w-10 text-red-500 hover:text-red-600'></TrashIcon></button>
            </div>
        </div>
    );
};

export default ReviewItem;