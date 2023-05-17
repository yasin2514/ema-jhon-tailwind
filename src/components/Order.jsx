import React, { useState } from 'react';
import Cart from './Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const deleteItem = (_id) => {
        const remaining = cart.filter(pd => pd._id !== _id);
        setCart(remaining);
        removeFromDb(_id)
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='lg:grid grid-cols-[3fr_1fr] gap-12'>
            <div>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        deleteItem={deleteItem}
                    ></ReviewItem>)
                }
            </div>
            <div className='bg-[#ffcd9b] px-4 py-6 rounded-md mt-10 lg:mt-0' >
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to='/checkOut' className=''>
                        <button className='bg-orange-600 flex justify-between items-center text-white rounded-md p-1 hover:bg-orange-700 w-full'>Proceed Checkout<ArrowRightIcon className='w-5 inline-block'></ArrowRightIcon></button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Order;