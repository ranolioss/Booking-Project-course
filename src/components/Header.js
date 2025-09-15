import React from "react";
import food1 from "../images/fish.jpg"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Mediterranean dining, rooted in tradition, refreshed for the modern palate.</p>
            <Link to="/Booking"><button aria-label="On Click">Book Table</button></Link>
            </div>
            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;