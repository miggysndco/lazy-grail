import React from 'react'
import { Link } from "react-router-dom";
import './Featured.css';

function Featured() {
  return (
    <div class="featured">
        <div class="boarder">
            <h1 class="featured-title">Featured Sneakers</h1>
        </div>
        <div class="featured-container">
            <div class="featured-items">
                <img src="/images/mocha.jpg" alt="Mocha" width={700} height={700}/>
                <Link to='/products' class="featured-text">
                <h2>Jordan 1 Retro High OG SP
                Travis Scott Mocha </h2>
                <p>SHOP NOW <i class='fas fa-arrow-right' /></p>
                </Link>
            </div>
            <div class="featured-items">
                <img src="/images/fragment.jpg" alt="fragment" width={700} height={700}/>
                <Link to='/products' class="featured-text">
                <h2>Jordan 1 Retro Low OG SP
                Travis Scott x Fragment</h2>
                <p>SHOP NOW <i class='fas fa-arrow-right' /></p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Featured
