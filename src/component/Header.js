import littleLemon from "../images/little-lemon.png";
import Nav from "./Nav"

export default function Header() {
    return (
        <header>
            <div className="navigation">
                <div className="logo">
                    <a href="/">
                        <img src={littleLemon} alt="logo" />
                    </a>
                </div>
                <Nav />
            </div>
        </header>
    )
}