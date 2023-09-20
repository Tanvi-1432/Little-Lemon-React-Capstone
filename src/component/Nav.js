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
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/reservation"><li>Reservation</li></Link>
                    <Link to="/order-online"><li>Order online</li></Link>
                    <Link to="/login"><li>Log in</li></Link>
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
                        <Link to="/" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Home</li></Link>
                        <Link to="/about" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>About</li></Link>
                        <Link to="/menu" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Menu</li></Link>
                        <Link to="/reservation" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Reservation</li></Link>
                        <Link to="/order-online" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Order online</li></Link>
                        <Link to="/login" onClick={() => setHamburgerClicked(!hamburgerClicked)}><li>Log In</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}