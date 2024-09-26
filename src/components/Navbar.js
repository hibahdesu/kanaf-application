import React, { useState } from 'react';
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
                <a href="#home">الصفحه الرئيسية</a>
                <a href="#about">من نحن</a>
                <a href="#about">كيفية العمل </a>
                <a href="#services">التطبيق</a>
                <a href="#contact">تواصل معنا</a>
            </div>
            <div className="toggle" onClick={toggleNavbar}>
                {isOpen ? '✖' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;