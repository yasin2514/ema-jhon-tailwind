import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];
        for (const id in storedCart) {
            const quantity = storedCart[id];
            const addedProduct = products.find(product => product.id === id);
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
        setCart(savedCart);
    }, [])

    const handleClick = (product) => {
        setCart([...cart, product]);
        addToDb(product.id);
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