import React from 'react';
function Hero() {
    return (
        <div className='container p-5 mb-8 hero-section  ' >
            <div className='row text-center'>
            <img src='media/images/homeHero.png' alt="Heroimg" style={{width:"100%"}}/>
            <h3 className='mt-5 p-2 fs-2'>Invest in everything</h3>
            <p className='fs-5 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="p-2 btn btn-primary fs-5 "style= {{margin:"0 auto",width:"18%" }}>Sign Up for free</button>
            </div>
            

        </div>
     );
}

export default Hero;