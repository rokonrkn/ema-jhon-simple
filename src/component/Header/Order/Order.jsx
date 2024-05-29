import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Order = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
            <div className='shop-container'>
                    <div className="product-container">
                       
                    </div>
                <div className="cart-container">
                    <div className="cart-details">
                        <h2>Order Summery</h2>
                        <h3>Order Count: {}</h3>
                        <h3>Shipping Charge: {}</h3>
                        <h3>Total Price: {}</h3>
                        
                    </div>
                </div>
        </div>
    );
};

export default Order;