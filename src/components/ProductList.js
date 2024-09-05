import React from 'react'
import CardItem from './CardItem'
import './Products.css'
import { Link } from 'react-router-dom'

function ProductList() {
  return (
    <div class="sneaker-cards">
        <div class="boarder">
        <h1>JORDAN</h1>
        </div>
        <div class="cards__container">
            <div class="cards__wrapper">
                <ul class="cards__items">
                    <CardItem 
                    src='images/jordan-1.jpg'
                    text='Jordan 1 Royal (2013)'
                    price='₱17,000'
                    label='Jordan'
                    />
                    <CardItem 
                    src='images/jordan-2.jpg'
                    text='Jordan 1 Hyper Royal'
                    price='₱16,000'
                    label='Jordan'
                    />
                    <CardItem 
                    src='images/jordan-3.jpg'
                    text='Jordan 1 University Blue'
                    price='₱16,500'
                    label='Jordan'
                    />
                    <CardItem 
                    src='images/jordan-4.jpg'
                    text='Jordan 4 University Blue'
                    label='Jordan'
                    price='₱13,500'
                    />
                    <CardItem 
                    src='images/jordan-5.jpg'
                    text='Jordan 11 Space Jam'
                    label='Jordan'
                    price='₱19,000'
                    />
                </ul>
                <ul class="cards__items">
                    <CardItem 
                    src='images/jordan-6.jpg'
                    text='Jordan 11 Legend Blue'
                    price='₱14,500'
                    label='Jordan'
                    />
                    <CardItem 
                    src='images/img-1.jpg'
                    text='Jordan 1 High Travis Scott x Fragment'
                    price='₱130,000'
                    label='Travis'
                    />
                    <CardItem 
                    src='images/img-2.jpg'
                    text='Jordan 4 White Oreo'
                    price='₱12,000'
                    label='Kobe'
                    />
                    <CardItem 
                    src='images/img-3.jpg'
                    text='Jordan 1 Royal Toe'
                    label='Jordan'
                    price='₱13,000'
                    />
                    <CardItem 
                    src='images/img-4.jpg'
                    text='Jordan 1 Low Starfish'
                    label='Jordan'
                    price='₱11,000'
                    />
                </ul>
                <ul class="cards__items">
                    <CardItem 
                    src='images/img-5.jpg'
                    text='Jordan 1 Low OG Neutral Grey'
                    price='₱6,999'
                    label='Jordan'
                    />
                    <CardItem 
                    src='images/img-6.jpg'
                    text='Jordan 1 Light Fusion Red'
                    price='₱7,999'
                    label='Jordan'
                    />
                    <CardItem 
                    src='images/kobe-1.jpg'
                    text='Kobe 5 Protro Lakers'
                    price='₱14,000'
                    label='Kobe'
                    />
                    <CardItem 
                    src='images/img-10.jpg'
                    text='Kobe 8 Christmas'
                    label='Kobe'
                    price='₱16,000'
                    />
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Kobe 9 Philippines'
                    label='Kobe'
                    price='₱18,000'
                    />
                </ul>
                <ul class="cards__items">
                    <CardItem 
                    src='images/dunk-3.jpg'
                    text='Nike Dunk SB High Tiffany'
                    price='₱25,000'
                    label='Dunk'
                    />
                    <CardItem 
                    src='images/dunk-4.jpg'
                    text='Nike Dunk High Michigan (2020)'
                    price='₱10,000'
                    label='Dunk'
                    />
                    <CardItem 
                    src='images/dunk-1.jpg'
                    text='Nike Dunk Low Off-White Michigan'
                    price='₱26,000'
                    label='Dunk'
                    />
                    <CardItem 
                    src='images/dunk-2.jpg'
                    text='Nike Dunk Low Medium Curry'
                    label='Dunk'
                    price='₱17,000'
                    />
                    <CardItem 
                    src='images/dunk-5.jpg'
                    text='Nike Dunk Low Sea Crystal'
                    label='Dunk'
                    price='₱6,500'
                    />
                </ul>
                <ul class="cards__items">
                    <CardItem 
                    src='images/dunk-6.jpg'
                    text='Nike SB Dunk Low Pro “Blue Fury”'
                    price='₱8,500'
                    label='Dunk'
                    />
                    <CardItem 
                    src='images/yeezy-4.jpg'
                    text='Yeezy 350 v2 Zebra'
                    price='₱14,000'
                    label='Yeezy'
                    />
                    <CardItem 
                    src='images/yeezy-2.jpg'
                    text='Yeezy 350 v2 Sesame'
                    price='₱9,000'
                    label='Yeezy'
                    />
                    <CardItem 
                    src='images/yeezy-3.jpg'
                    text='Yeezy 350 v2 Semi Frozen Yellow'
                    label='Yeezy'
                    price='₱11,000'
                    />
                    <CardItem 
                    src='images/yeezy-1.jpg'
                    text='Yeezy Foam RNNR Sand'
                    label='Yeezy'
                    price='₱17,000'
                    />
                </ul>
            </div>
        </div>
        <div class="product-button">
            <div class="button">
                <Link to='/contact'>
                <h2>CONTACT US</h2>
                </Link>
            </div>
            <div class="button">
                <Link to='https://www.instagram.com/lazy_grail/'>
                <h2>VISIT OUR INSTAGRAM</h2>
                </Link>
            </div>
        </div>
    </div>    
  )
}

export default ProductList
