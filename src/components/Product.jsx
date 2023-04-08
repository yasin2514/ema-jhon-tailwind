import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Product = ({ product }) => {
    const { id, category, name, seller, price, ratings, img, quantity, shipping } = product;
    console.log(product.id)
    return (
        <div className='border border-gray-400 rounded-lg flex flex-col '>
            <div className='p-2'>
                <img src={img} className='rounded-md' alt="" />
            </div>
            <div className='px-4 py-2 flex flex-col gap-1'>
                <h5 className='text-[1.4rem] font-semibold'>{name}</h5>
                <h6 className='text-[1.2rem] font-medium py-2'>Price: {price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='text-center mt-auto bg-[#FF9900] p-3 rounded-br-lg rounded-bl-lg'>Add to Cart <ShoppingCartIcon className='w-6 inline-block' ></ShoppingCartIcon></button>
        </div>
    );
};

export default Product;