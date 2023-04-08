import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Shop = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div className='grid grid-cols-[4fr_1fr] gap-14'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div>
                summary
            </div>
        </div>
    );
};

export default Shop;