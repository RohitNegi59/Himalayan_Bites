import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import ProductDetail from './Components/Product Details/ProductDetail';
import Cart from './Components/Cart/Cart';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from './Components/Profile/Profile';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App/>} />
      <Route path='/product/:details' element={<ProductDetail />}></Route>
      <Route path="/home" element={<App />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
