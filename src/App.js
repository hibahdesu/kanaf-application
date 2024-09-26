// src/App.js
import React from 'react';
import "./styles/App.css"; // Import global styles
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Footer from "./components/Footer";
import About from './components/About';
import FAQ from './components/FAQ';

function App() {
    return (
            <div className="App">
                <Navbar />
                <Hero />
                <About />
                <FAQ />
                <Footer />
            </div>
    );
}

export default App;