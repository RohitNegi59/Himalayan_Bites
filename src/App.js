import './App.css';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Oval from './Components/Assets/Oval';
import Ract from './Components/Assets/Ract';
import Review from './Components/Assets/Review/Review';
import Ribbion from './Components/Assets/Ribbion/Ribbion';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Product from './Components/Product/Product';



function App() {

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
          removeCookie("jwt");
          navigate("/login");
        } else{
          console.log(data.customer);
          toast(`Hi ${data.customer.name} 🦄`, {
            theme: "dark",
          });

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
    <div className="App">
      {/* {logOut()} */}
      <ToastContainer />
      <Header />
      <Nav/>
      <Ract Banner="bannerone"/>
      <Ribbion class ="Ribbion"Text="Top Selling"/>
      <Oval/>
      <Ract Banner="bannertwo"/>
      <Ribbion Text="Our Products" class="Footer_text"/>
      <Product/>
      <Ribbion Text="Our Reviews" class="Footer_text"/>
      <Review/>
      <Ribbion class ="Ribbion"/>
      <Footer/>
      <Ribbion  class="Ribbion_footer"  Text="@copyright | The Himalayan Bites"/>
    </div>
  );
}

export default App;
