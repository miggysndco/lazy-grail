import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div class="footer-container">
        <div class="footer-link-wrapper">
            <div class="footer-link-items">
                <h2>LAZY GRAIL</h2>
                <Link to='/about'>About Us</Link>
            </div>
            <div class="footer-link-items">
                <Link to='/'><i class='fab fa-instagram' />Instagram</Link>
                <Link to='/'><i class='fab fa-facebook-f' />Facebook</Link>
            </div>
            <div class="footer-link-items">
                <p>+65 917 592 3291</p>
                <p>Binan City, Laguna</p>
            </div>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Footer
