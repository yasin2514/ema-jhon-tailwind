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
        let newCart = [];
        const exits = cart.find(pd => pd.id === product.id);
        if (exits) {
            exits.quantity = exits.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exits]

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // setCart([...cart,product])
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