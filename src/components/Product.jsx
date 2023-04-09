import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Product = ({ product, handleClick }) => {
    const { id, name, seller, price, ratings, img } = product;
    return (
        <div className='border border-gray-300 rounded-lg flex flex-col overflow-hidden'>
            <div className='p-2 h-56 '>
                <img src={img} className='rounded-md h-full w-full object-cover' alt="" />
            </div>
            <div className='px-4 py-3 flex flex-col gap-1'>
                <h5 className='text-[1.4rem] font-semibold'>{name}</h5>
                <h6 className='text-[1.2rem] font-medium py-2'>Price: {price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleClick(product)} className='hover:bg-[#FF9900] text-center mt-auto bg-[#ffcd9b] p-3 rounded-br rounded-bl'>Add to Cart <ShoppingCartIcon className='w-6 inline-block' ></ShoppingCartIcon></button>
        </div>
    );
};

export default Product;