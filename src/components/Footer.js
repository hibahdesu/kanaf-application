// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import specific styles for Footer
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <div className='footer-links'>
                <Link to="/contact">تواصل معنا</Link>
                <Link to="/aboutus">من نحن</Link>  
                <Link to="/howwork">كيفية العمل</Link> 
                </div>
                <img src='/images/logo.png' alt='logo' />
            </div>
            <p>&copy; 2024 Kanaf. All rights reserved.</p>
        </footer>
    );
};

export default Footer;