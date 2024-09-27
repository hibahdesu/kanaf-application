// src/App.js
import React from 'react';
import "./styles/App.css"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import HowWork from './pages/HowWork';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Footer from "./components/Footer";
import About from './components/About';
import FAQ from './components/FAQ';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                {/* This will show the Hero, About, FAQ, and Footer on all pages */}
                <Routes>
                    <Route path='/' element={
                        <>
                            <Hero />
                            <About />
                            <FAQ />
                        </>
                    } />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/howwork' element={<HowWork />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;