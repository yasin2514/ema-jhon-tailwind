import React from 'react';
import { deleteShoppingCart } from '../utilities/fakedb';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 0.07;
    const grandTotaL = totalPrice + totalShipping + tax;
    return (
        <div className='sticky top-5 font-medium '>
            <h2 className='tex-4xl font-semibold text-xl '>Order Summary</h2>
            <div className='my-6 flex flex-col gap-5'>
                <h3>Selected Item: {quantity}</h3>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotaL.toFixed(2)}</p>
                <button onClick={() => deleteShoppingCart()}>Clear Cart </button>
            </div>
        </div>
    );
};

export default Cart;