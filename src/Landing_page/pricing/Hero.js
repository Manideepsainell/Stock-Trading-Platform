import React from 'react';

function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row text-center p-5'>
                <h1 style={{ fontSize: "1.75rem", lineHeight: "1.25" }}>Charges</h1>
                <p className='text-muted fs-5'>List of all charges and taxes</p>
            </div>
            <div  className='row p-5 mt-5 text-center'>
            <div className='col-4 p-5 mt-5'>
                <img src="media/images/pricingEquity.svg" style={{maxHeight:"80%",maxWidth:"80%"}} />
                <h1 className='fs-3 mt-4'>
                    Free equity delivery
                </h1>
                <p className='text-muted p-2 '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-5 mt-5'>
                  <img src="media/images/intradayTrades.svg"   style={{maxHeight:"80%",maxWidth:"80%"}}/>
                <h1 className='fs-3 mt-4'>
                    Intraday and F&O trades
                </h1>
                <p className='text-muted p-1 '>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 p-5 mt-5'>
                  <img src="media/images/pricingEquity.svg"  style={{maxHeight:"80%",maxWidth:"80%"}} />
                <h1 className='fs-3 mt-4 p-2'>
                    Free direct MF
                </h1>
                <p className='text-muted '>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
            </div>

        </div>  
    );
}

export default Hero;
