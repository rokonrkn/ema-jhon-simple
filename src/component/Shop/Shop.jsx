import React from 'react';
import './Shop.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { key } from 'localforage';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [Cart, setCart] = useState([])
    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
        // console.log()
        
    },[])
        const AddEvenHandller = (products) => {
            const newCart = [...Cart, products]
            setCart(newCart)
            addToDb(products.key)
        } 

        useEffect( () =>{
            const saveCart = [];
            const productKey = getShoppingCart();
            // console.log(productKey)
            for(const key in productKey){
                // console.log(key) 
                const saveProducts = products.find(product => product.key === key)
                if(saveProducts){
                    const quantity = productKey[key];
                    saveProducts.quantity = quantity;
                    saveCart.push(saveProducts)
                    console.log(saveProducts)
                }
            }
            setCart(saveCart)
        } ,[products])

        let total = 0;
        let quantity = 0;
        for (let i = 0; i < Cart.length; i++) {
            const element = Cart[i];
            total = total + element.price * element.quantity;
            // if(element.quantity){
            //     element.quantity = 1;
            // }
            // element.quantity = element.quantity 
            quantity = quantity + element.quantity;
            
        }
        let charge = 0;
        if( total > 50 ){
            charge = charge + 10.50;
        }
        // }else if(products.price){
        //     charge = 0;
        // }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key = {product.id}
                    product={product}
                    AddEvenHandller ={AddEvenHandller}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-details">
                    <h2>Order Summery</h2>
                    <h3>Order Count: {quantity}</h3>
                    <h3>Shipping Charge: {charge}</h3>
                    <h3>Total Price: {total}</h3>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;