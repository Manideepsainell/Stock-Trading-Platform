import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* Left: Image */}
        <div className="col-md-6">
          <img
            src="media/images/largestBroker.svg"
            alt="awards"
            className="img-fluid"
          />
        </div>

        {/* Right: Content */}
        <div className="col-6 p-5">
          <h1>Largest stock broker in India</h1>
          <p className='mb-5 mt-4'>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li><p className='mb-4' >Futures and Options</p></li>
                <li><p className='mb-4'>Commodity derivatives</p></li>
                <li><p className='mb-4'mb-4>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p className='mb-4'>Stocks & IPO'S </p></li>
                <li><p className='mb-4'>Direct Mutual Funds</p></li>
                <li><p className='mb-4'> Bonds and Govt. Securities</p></li>
              </ul>
            </div>
            <img src='media/images/pressLogos.png' alt="img" style={{width:"80%"}}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;
