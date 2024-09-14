import React from 'react'

const Showcart = (props) => {
  return (

    <>    
        <div className='product'>
    <div className=''>
      <img className="product-image" src={props.Image}></img>
    </div>
      <div><h2 className='cart_product_text'>{props.Name}</h2></div>
      <div><h2 className='cart_product_text'>{props.Price}</h2></div>
      <div><h2 className='cart_product_text'>{props.Qty}</h2></div>
      <div><h2 className='cart_product_text'><a href={"http://localhost:3001/cart/" + props.id}>Delete</a></h2></div>
  </div>


  </>

  )
}

export default Showcart