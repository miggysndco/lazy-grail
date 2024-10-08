import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li class="cards__item">
        <Link class="cards__item__link" to={props.path}>
            <figure class="cards__item__pic-wrap" data-category={props.label}>
                <img 
                    src={props.src} 
                    alt="Shoes" 
                    class="cards__item__img"
                />
            </figure>
            <div class="cards__item__info">
                <h5 class="cards__item__text">{props.text}</h5>
                <h5 class="cards__item__price">{props.price}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
