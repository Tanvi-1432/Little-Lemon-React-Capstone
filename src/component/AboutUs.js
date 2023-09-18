import React from 'react'
import marioAndAdrian1 from '../images/Mario and Adrian A.jpg'
import marioAndAdrian2 from '../images/Mario and Adrian b.jpg'

export default function AboutUs() {
    return (
        <section className='about-us' id='about'>
            <div className='about-us-container'>
                <div className='about-us-detail'>
                    <h2>Our Story</h2>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                        <br/><br/>
                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                </div>
                <div className='about-us-img'>
                    <img src={marioAndAdrian1} alt='Mario and Adrian'/>
                    <img src={marioAndAdrian2} alt='Mario and Adrian'/>
                </div>
            </div>
        </section>
    )
}
