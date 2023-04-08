import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='grid grid-cols-[4fr_1fr]'>
            <div>
                products
            </div>
            <div>
                summary
            </div>
        </div>
    );
};

export default Shop;