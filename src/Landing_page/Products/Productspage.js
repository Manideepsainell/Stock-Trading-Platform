import React from 'react';

import Hero from './Hero';
import Leftsec from './Leftsec';
import Rightsec from './Rightsec';
import Universe from './Universe';
import Footer from '../Footer';
function ProductsPage() {
    return ( 
        <>
            <Hero/>
            <Leftsec imageURL="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="tryDemo" learnMore="learnmore"googlePlay=""appStore=""/>
            <Rightsec prodtitle="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnmore="learnmore" imgurl="media/images/console.png"/>
             <Leftsec imageURL="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" googlePlay=""appStore="" coin="Coin"/>
              <Rightsec prodtitle="Kite Connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." connect="connect" imgurl="media/images/landing.svg"/>
              <Leftsec imageURL="media/images/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore=""googlePlay=""appStore=""/>
             <div className="row align-items-center">
  <div className="col-12 text-center mt-5 mb-5">
    <p className='fs-4'>
      Want to know more about our technology stack?
      Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech </a>blog.
    </p>
  </div>
</div>

            <Universe/>
            </>
         );
}

export default ProductsPage;