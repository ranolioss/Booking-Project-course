import React from "react";
import small_logo from "../images/small_logo.png";
import salad from "../images/salad.jpg";
import bruschetta from "../images/bur.jpg";
import fish from "../images/fish.jpg";
import pasta from "../images/pasta.jpg";

const Footer = () => {
  return (
    
    <footer id="footer"> 
          <ul className="footer-chips">
          <li><a href="/lunch">Lunch</a></li>
          <li><a href="/mains">Mains</a></li>
          <li><a href="/desserts">Desserts</a></li>
          <li><a href="/a-la-carte">A La Carte</a></li>
          </ul>
      <section>
        <div>
          <h3>Menu</h3>
          <ul>
            <li>
              <img src={salad} alt="Greek Salad" width="500" />
              <p>Greek salad, choriatiki or horiatiki is a salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, lemon juice and olive oil. Common additions include green bell pepper or caper berries.</p>
              <span>Greek Salad - $12.99</span>
            </li>
            <break>---------------------------------------------------------------------</break>
            <li>
              <img src={bruschetta} alt="Bruschetta" width="500" />
              <p>Bruschetta is an Italian appetizer consisting of grilled bread topped with garlic, olive oil, and salt. Most commonly it is served with toppings of tomatoes, vegetables, beans, cured meat or cheese. In Italy, bruschetta is often prepared using a brustolina grill.</p>
              <p>Bruschetta - $7.99</p>
            </li>
            <break>---------------------------------------------------------------------</break>
            <li>
              <img src={fish} alt="Grilled Fish" width="500" />
              <p>Grilled fish mean dish" is likely a question about what a grilled fish dish is. A grilled fish is a dish made by cooking fish over a grill, typically resulting in a smoky, flavorful meal with a crispy exterior and tender, flaky interior.</p>
              <span>Grilled Fish - $20.00</span>
            </li>
            <break>---------------------------------------------------------------------</break>
            <li>
              <img src={pasta} alt="Pasta" width="500" />
              <p>Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.</p>
              <span>Pasta - $12.99</span>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
