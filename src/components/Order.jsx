import React from 'react';
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';

const Order = () => {
    const cart = useLoaderData();
    return (
        <div className='lg:grid grid-cols-[3fr_1fr] gap-12'>
            <div>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='bg-[#ffcd9b] px-4 py-6 rounded-md mt-10 lg:mt-0' >
                <Cart
                    cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Order;