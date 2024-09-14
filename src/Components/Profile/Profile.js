import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Nav';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';

const Profile = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
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
        } else {
          setEmail(data.customer.email);
          setName(data.customer.name);
          setAddress(data.customer.address);
          console.log(data);
        }

      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className='body_profile'>
        <div class="container_profile">
          <div class="circle_profile">
            <img class="circle_profile_logo" src="/profile.png"/>
          </div>
          <div class="info-row">
            <div class="label">Name</div>
            <div class="value">{name}</div>
          </div>
          <div class="info-row">
            <div class="label">Email</div>
            <div class="value">{email}</div>
          </div>
          <div class="info-row">
            <div class="label">Address</div>
            <div class="value">{address}</div>
          </div>
          <div class="info-row">
            <button onClick={logOut}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;