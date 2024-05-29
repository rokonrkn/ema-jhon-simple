import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />

            <nav className="catagorys">
                <a href="/">Home</a>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;