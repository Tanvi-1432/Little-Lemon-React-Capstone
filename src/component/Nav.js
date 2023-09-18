import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {

    const [hamburgerClicked, setHamburgerClicked] = useState(false);

    if (hamburgerClicked) {
        document.body.classList.add('disable-scroll');
    } else {
        document.body.classList.remove('disable-scroll');
    }

    return (
        <nav>
            <div className="desktop-navigation">
                <ul>
                    <Link to="Little-Lemon-React-Capstone/"><li>Home</li></Link>
                    <Link to="Little-Lemon-React-Capstone/about"><li>About</li></Link>
                    <Link to="Little-Lemon-React-Capstone/menu"><li>Menu</li></Link>
                    <Link to="Little-Lemon-React-Capstone/reservation"><li>Reservation</li></Link>
                    <Link to="Little-Lemon-React-Capstone/order-online"><li>Order online</li></Link>
                    <Link to="Little-Lemon-React-Capstone/login"><li>Log in</li></Link>
                </ul>
            </div>

            <div className="mobile-navigation">
                <button
                    className="hamburger-btn"
                    aria-expanded={hamburgerClicked}
                    onClick={() => setHamburgerClicked(!hamburgerClicked)}
                >
                    <div className="hamburger">
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </div>
                </button>
                <div
                    className={hamburgerClicked ? "mobile-nav-mask" : ""}
                    onClick={() => setHamburgerClicked(!hamburgerClicked)}
                >
                </div>
                <div className={`mobile-nav-container ${hamburgerClicked ? "mobile-nav-active" : ""}`}>
                    <ul>
                        <Link to="Little-Lemon-React-Capstone/" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Home</li></Link>
                        <Link to="Little-Lemon-React-Capstone/about" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>About</li></Link>
                        <Link to="Little-Lemon-React-Capstone/menu" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Menu</li></Link>
                        <Link to="Little-Lemon-React-Capstone/reservation" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Reservation</li></Link>
                        <Link to="Little-Lemon-React-Capstone/order-online" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Order online</li></Link>
                        <Link to="Little-Lemon-React-Capstone/login" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Log In</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}