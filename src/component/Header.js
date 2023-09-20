import littleLemon from "../images/little-lemon.png";
import { Link } from "react-router-dom";
import Nav from "./Nav"

export default function Header() {
    return (
        <header>
            <div className="navigation">
                <div className="logo">
                    <Link to="/">
                        <img src={littleLemon} alt="logo" />
                    </Link>
                </div>
                <Nav />
            </div>
        </header>
    )
}