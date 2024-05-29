import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name, price, seller, img, rating} = (props.product);
    const AddEvenHandller = props.AddEvenHandller;
    return (
        <div className='img-header'>
            <img src={img} alt="" />
            <div className="product-name">
                <h4>{name}</h4>
                <h3>Price: ${price}</h3>
                <p>Manufuture: {seller}</p>
            </div>
            <button onClick={ () => AddEvenHandller(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;