import React from 'react'
import './BST.css'

function BST() {
  return (
    <div class="bst">
      <div class="bst-container">
        <div class="bst-items">
            <h2><i class='fas fa-shopping-cart' /> Buy</h2>
            <p>Looking for the latest Yeezy drop or that classic pair 
                of Air Jordans? We offer a wide selection of 
                authentic sneakers, from the most sought
                -after releases to timeless classics. 
            </p>
        </div>
        <div class="bst-items">
            <h2><i class='fas fa-money-bill' /> Sell</h2>
            <p>Got a pair that doesn't quite fit your style anymore? 
                Selling your sneakers is simple and stress-free. 
                Just bring your lightly worn or new sneakers to our 
                store, or submit them online for evaluation. 
            </p>
        </div>
        <div class="bst-items">
            <h2><i class='fas fa-handshake' /> Trade</h2>
            <p>Ready for a change? With our Trade program, you can 
                swap out your current kicks for something new. Whether 
                you're looking for a fresh style or a rare find, 
                trading with us is easy.
            </p>
        </div>
      </div>
    </div>
  )
}

export default BST
