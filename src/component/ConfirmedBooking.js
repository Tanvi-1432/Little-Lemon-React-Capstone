import React from 'react'
import checkSign from '../images/check sign.webp'
import { Link } from 'react-router-dom'

export default function ConfirmedBooking() {
    return (
        <div className='confirmation'>
            <div>
                <h2>Thank you</h2>
                <img src={checkSign} alt='check sign' />
                <p className='confirm-msg'>Your booking is confirmed</p>
                <p className='reminder'>You will get a reminder and a confirmation text on your provided phone number and email.</p>
                <Link to="Little-Lemon-React-Capstone/"><button>Home</button></Link>
            </div>
        </div>
    )
}
