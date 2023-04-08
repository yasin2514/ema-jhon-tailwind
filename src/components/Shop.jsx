import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([])

    const handleClick = (product) => {
        setCart([...cart, product])
    }
    return (
        <div className='md:grid grid-cols-[4fr_1fr] gap-14'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Product>)
                }
            </div>
            <div >
                <div className='sticky top-5'>
                    <h3>Selected Item: {cart.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;