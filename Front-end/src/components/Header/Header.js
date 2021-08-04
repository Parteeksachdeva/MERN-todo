import React from 'react'
import "./Header.css"
import {
  Link
} from "react-router-dom";

function Header() {
    return (
        <div className="header">
          <div class="header__main">
            <div className="header__logo">
              <img src="https://www.telegraph.co.uk/content/dam/art/Spark/Barneby%27s%20Auctions/man-raising-hand-to-bid-in-crowded-auction-room.jpg?imwidth=450" alt="logo" />
              <p>Auction Store</p>
            </div>
            
            <div class="header__links">
              <Link to="/products">PRODUCTS</Link>
              <Link to="/abc">HOW IT WORKS</Link>
              <Link to="/abc">ABOUT US</Link>
              <Link to="/abc">CONTACT US</Link>
            </div>
            <div class="header__right">
              <Link to="/products">BUYER</Link>
              <Link to="/create">SELLER</Link>
            </div>
          </div>
        </div>
    )
}

export default Header




{/* <div class="res__button" id="res-btn">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div class="res__menu" id="res-menu">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Testimonals</a>
              <a href="#">Help</a>
              <div class="res__btn">
                <button class="res__signin">Sign In</button>
                <button class="right__signup">Sign Up</button>
              </div>
            </div> */}