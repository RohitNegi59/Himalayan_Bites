import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header'
import Nav from '../Navbar/Nav'
import axios from 'axios'
import Showcart from '../Assets/Showcart'


const Cart = () => {
  const [result, SetResult] = useState([])
  const [total, SetTotal] = useState(0)

  const paymentHandler = async (event) => {

    const amount = total*100;
    const currency = 'INR';
    const receiptId = '1234567890';

    const response = await fetch('http://localhost:3001/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId
      })
    })

      const order = await response.json();
      console.log('order', order);


      var option = {
        key:"",
        amount,
        currency,
        name:"Himalayan Bites",
        description: "Test Transaction",
        image:"https://i.ibb.co/5Y3m33n/test.png",
        order_id:order.id,
        handler: async function(response) {
          
          const body = {...response,}

          const validateResponse = await fetch('http://localhost:3001/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)

          })

          const jsonResponse = await validateResponse.json();

          console.log('jsonResponse', jsonResponse);
          
        },
        prefill: {
          name: "Himalayan Bites", 
          email: "Himalayn@example.com",
          contact: "9000000000", 
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }

      var rzp1 = new window.Razorpay(option);
      rzp1.on("payment.failed", function(response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      })

      rzp1.open();
      event.preventDefault();
  }

  axios.get("http://localhost:3001/cart")
    .then((response) => {
      const cartItems = response.data; // Store response data in a meaningful variable
     
      // Calculate total amount
      const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
      
      // Set state variables
      SetResult(cartItems);
      SetTotal(totalAmount);
    })
    .catch((error) => {
      console.error("Error fetching cart data:", error);
    });

  return (
    <>
      <Header />
      <Nav />
      <div class="container_cart">
        <div class="header">
          <div><h2 className='cart_product_text'>Image</h2></div>
          <div><h2 className='cart_product_text'>Name</h2></div>
          <div><h2 className='cart_product_text'>Price</h2></div>
          <div><h2 className='cart_product_text'>Qty</h2></div>
          <div><h2 className='cart_product_text'>Remove</h2></div>
        </div>

        {result && result.length > 0 ? (
          result.map((item) => (
            <li className="showcart" key={item._id}>
              <Showcart Image={item.image} Name={item.name} Price={item.price} Qty={item.qty} id={item._id} />
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className='cartotal'><h1>Cart Totals</h1>
        <div className='cart_total_text'><h2>Subtotal:</h2><h2>{total}</h2></div>
        <div className='cart_total_text'><h2>Delivery Charge:</h2><h2>{60}</h2></div>
        <div className='cart_total_text'><h2>Total:</h2><h2>{total+60}</h2></div>
        <button className='payment_button' onClick={paymentHandler}>Procees to checkout</button>
      </div>

    </>

  )
}

export default Cart