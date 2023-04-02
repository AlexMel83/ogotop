import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
            <span className='logo'>House Stuff</span>
            <ul className='nav'>
                <li>About us</li>
                <li>Contats</li>
                <li>Cabinet</li>
            </ul>
            <FaShoppingCart onClick={()=>setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            {cartOpen && (
              <div className='shop-cart' ></div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
