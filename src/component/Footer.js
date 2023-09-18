import React from 'react'
import footerLogo from '../images/footer-logo.png'

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div>
                    <img src={footerLogo} alt='little lemon logo' />
                </div>
                <div className='footer-wrapper'>
                    <div className='about'>
                        <h4>About us</h4>
                        <ul>
                            <a href=''><li>Our Company</li></a>
                            <a href=''><li>Suppliers</li></a>
                            <a href=''><li>Careers</li></a>
                            <a href=''><li>Newsletter</li></a>
                            <a href=''><li>Customer Service</li></a>
                            <a href=''><li>Contact Us</li></a>
                        </ul>
                    </div>
                    <div className='contact-info'>
                        <h4>Contacts</h4>
                        <ul>
                            <li><a href='tel:123-456-7890'>+1(123)456-7890</a></li>
                            <li><a href='mailto:info@littlelemon.com'>info@littlelemon.com</a></li>
                            <li><address>123 Ford Blvd, Chicago, IL, 60618</address></li>
                        </ul>
                    </div>
                    <div className='availibity'>
                        <h4>Availitbity</h4>
                        <ul>
                            <li>Tues-Thurs: 12pm-10pm</li>
                            <li>Fri-Sun: 12pm-10pm</li>
                            <li>Mon: Closed</li>
                        </ul>
                    </div>
                    <div className='social-media'>
                        <h4>Socials</h4>
                        <ul>
                            <a href='https://www.instagram.com'><li>Instagram</li></a>
                            <a href='https://www.facebook.com'><li>Facebook</li></a>
                            <a href='https://www.pintrest.com'><li>Pintrest</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
