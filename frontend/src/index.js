import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './Landing_page/Home/Homepage';
import SignUp from "./Landing_page/SignUp/Signup";
import AboutPage from "./Landing_page/About/AboutPage";
import ProductPage from "./Landing_page/Products/Productspage";
import PricingPage from './Landing_page/pricing/Pricingpage';
import Supportpage from './Landing_page/Support/Supportpage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<Supportpage/>}/>
    <Route path="*" element={<NotFound/>}/>

    
    
    </Routes>
    <Footer/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
