// src/App.js
import React from 'react';
import "./styles/App.css"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import HowWork from './pages/HowWork';
import Application from './pages/Application';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from "./components/Footer";
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <ScrollToTop /> {/* Add ScrollToTop here */}
                {/* This will show the Hero, About, FAQ, and Footer on all pages */}
                <Routes>
                    <Route path='/' element={
                        <>
                            <Hero />
                            <MainContent />
                            <FAQ />
                        </>
                    } />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/howwork' element={<HowWork />} />
                    <Route path='/application' element={<Application />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;