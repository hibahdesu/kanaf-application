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
            <div className="logo">My Logo</div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/">الصفحه الرئيسية</Link>
                <Link to="/aboutus">من نحن</Link> {/* Updated path */}
                <Link to="/howwork">كيفية العمل</Link> {/* Updated path */}
                <Link to="/appph">التطبيق</Link> {/* Updated path */}
                <Link to="/contact">تواصل معنا</Link> {/* Updated path */}
            </div>
            <div className="toggle" onClick={toggleNavbar}>
                {isOpen ? '✖' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;