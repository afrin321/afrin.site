import React from 'react'
import Info from './BusinessCard/Info'
import About from './BusinessCard/About'
import Interest from './BusinessCard/Interest'
import Footer from './BusinessCard/Footer'

export default function BusinessCard() {
    return (
        
    <div className="card-container">
        <Info />
        <About />
        <Interest />
        <Footer />
    </div>
        
    )
}