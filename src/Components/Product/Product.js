import React from 'react'
import Card from '../Assets/Card'
import axios from 'axios'
import { useState } from 'react'

const Product = () => {

  const [result, SetResult] = useState([])

  axios.get("http://localhost:3001/product")
    .then((result) => {
      SetResult(result.data)

    }).catch((err) => {
      console.log(err)
    });

  return (
    <div className='product_page'>
      <div className=''>
        <ul className=' card_holder'>
          {result && result.length > 0 ? (
            result.map((item) => (
              <li key={item._id}>
                <Card Image={item.image} Name={item.name} Price={item.price} Qty={item.qty} id={item._id} />
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Product