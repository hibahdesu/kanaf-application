// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            
            <div className="logo">
                <img src='/images/logo.png'  alt='logo' />
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/contact">تواصل معنا</Link> 
                <Link to="/application">التطبيق</Link> 
                <Link to="/howwork">كيفية العمل</Link> 
                <Link to="/aboutus">من نحن</Link> 
                <Link to="/">الصفحه الرئيسية</Link>
            </div>
            <div className="toggle" onClick={toggleNavbar}>
                {isOpen ? '✖' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;