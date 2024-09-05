import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div class="cards">
        <div class="boarder">
        <h1>Latest Sneakers</h1>
        </div>
        <div class="cards__container">
            <div class="cards__wrapper">
                <ul class="cards__items">
                    <CardItem 
                    src='images/img-1.jpg'
                    text='Jordan 1 High Travis Scott x Fragment'
                    price='₱90,000'
                    label='Travis Scott'
                    />
                    <CardItem 
                    src='images/img-2.jpg'
                    text='Jordan 4 White Oreo'
                    price='₱12,000'
                    label='Jordan'
                    />
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Kobe 9 Philippines'
                    price='₱18,000'
                    label='Kobe'
                    />
                    <CardItem 
                    src='images/img-4.jpg'
                    text='Jordan 1 Low Starfish'
                    label='Jordan'
                    price='₱11,000'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-10.jpg'
                    text='Kobe 8 Christmas'
                    label='Kobe'
                    price='₱16,000'
                    />
                    <CardItem
                    src='images/img-3.jpg'
                    text='Jordan 1 Royal Toe'
                    price='₱17,000'
                    label='Jordan'
                    />
                    <CardItem
                    src='images/img-7.jpg'
                    text='Jordan 4 Taupe Haze'
                    price='₱15,000'
                    label='Jordan'
                    />
                    <CardItem
                    src='images/img-8.jpg'
                    text='Jordan 5 Fire Red 2013'
                    price='₱7,000'
                    label='Jordan'
                    />
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
