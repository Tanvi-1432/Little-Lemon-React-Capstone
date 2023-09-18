import React from 'react'
import heroImage from '../images/hero-image.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className='hero-section'>
            <div className='hero-container'>
                <div className='hero-detail'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern
                        twist.
                    </p>
                    <Link to="Little-Lemon-React-Capstone/reservation"><button aria-label='On-Click'>Reserve a table</button></Link>
                </div>
                <div className='hero-img'>
                    <img src={heroImage} alt='' />
                </div>
            </div>
        </section >
    )
}
