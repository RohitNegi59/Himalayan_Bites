import React, { useState, useEffect } from 'react';
import Header from '../Header/Header'
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Ribbion from '../Assets/Ribbion/Ribbion'
import Navbar from '../Navbar/Nav'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const {details}=useParams();
    const[result,SetResult]=useState([])
    const[img,SetImg]=useState()
    const[name,Setname]=useState()
    const[price,Setprice]=useState()
    const[qty,Setqty]=useState()
    const[address,setAddress]=useState()

    useEffect(() => {
        const verifyUser = async () => {
          if (!cookies.jwt) {
            navigate("/login");
          } else {
            const { data } = await axios.post(
              "http://localhost:3001/",
              {},
              {
                withCredentials: true,
              }
            );
            if (!data.status) {
              console.log("error data is not recived")
              // removeCookie("jwt");
              // navigate("/login");
            } else{
              setAddress(data.customer.address);
              console.log(data);
            }
             
          }
        };
        verifyUser();
      }, [cookies, navigate, removeCookie]);

    axios.get(`http://localhost:3001/product/${details}`)
      .then((users) => {
        SetResult(users.data);
        SetImg(users.data.image);
        Setname(users.data.name);
        Setprice(users.data.price);
        Setqty(users.data.qty);

      }).catch((err) => {
        console.log(err)
      });


  const addtocart=()=>{

    axios.post("http://localhost:3001/cart",{img,name,price,qty,address})
    .then((result) => {
        console.log(result.name)
    }).catch((err) => {
        console.log(err)
    });
  }
      
    return (
        <>
            <Header />
            <Navbar/>
            <div className='cart_page'>

                <div className='leftcart'>
                    <div className='cart_card'>
                        <div className= "cart_img">
                        <img className='product_image'  src={result.image} alt='product image'></img>
                        </div>
                        <h1>{result.name}</h1>
                    </div>
                </div>
                <div className='rightcart'>
                <div className='cart_card_details'>
                        <div className='cart_details'></div>
                        <div className='cart_details'>Price:{result.price}</div>
                        <div className='cart_details'>Qty:{result.qty}</div>
                        <div className='cart_details'>desc:{result.name}</div>
                        <button onClick={addtocart} className='cart_details_button'><a href='/cart'> <h1 className='pro_button'>Buy Now</h1></a></button>
                    </div>                  
                </div>
            </div>

            <Ribbion class="Ribbion_footer" Text="@copyright | The Himalayan Bites" />

        </>

    )
}

export default ProductDetail