import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='image_div'>
        <img className="product_image" src={props.Image}></img>
      </div>
      <div className='card_item'>
        <h1 className='card_item_font_big'>{props.Name}</h1>
        <h1 className='card_item_font'>Price:{props.Price}</h1>
        <h1 className='card_item_font'>Qty:{props.Qty}</h1>
        <Link to={`/product/${props.id}`}>
       <h1 className=''>order</h1>
        </Link>
      </div>
    </div>
  )
}

export default Card