import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleClick = (product) => {
        setCart([...cart, product])
    }
    return (
        <div className='md:grid grid-cols-[4fr_1fr] gap-12'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Product>)
                }
            </div>
            <div className='bg-[#ffcd9b] px-4 py-6 rounded-md' >
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;