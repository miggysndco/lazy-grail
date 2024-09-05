import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav class="navbar">
          <div class="navbar-container">
            <Link to="/" class="navbar-logo">
              LAZY GRAIL 
            </Link>
            <div class="menu-icon" onClick={handleClick}>
              <i class={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul class={ click ? 'nav-menu active' : 'nav-menu'}>
              <li class="nav-item">
                <Link to='/' class="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/about' class="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/products' class="nav-links" onClick={closeMobileMenu}>
                  Sneakers
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-links" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar;
