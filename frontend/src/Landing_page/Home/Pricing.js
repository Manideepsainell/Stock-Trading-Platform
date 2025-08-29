import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mt-3 ">
          <h1 className="mb-6 fs-3 p-2 ">Unbeatable pricing</h1>
          <p className= "p-3" style={{maxWidth:"400px"}}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6  mb-12">
          <div className="row text-center">
            <div className="col p-3">
              <img src="media/images/pricing-eq.svg" alt="img" style={{width:"100px",height:"100px"}} />
              <p>
                Free account <br/> opening
              </p>
            </div>
            <div className="col p-3 ">
               <img src="media/images/pricing-eq.svg" alt="img" style={{width:"100px",height:"100px"}} />
              <p>Free equity delivery<br/>
and direct mutual funds</p>
            </div>
            <div className="col p-3">
              <img src="media/images/other-trades.svg" alt="img" style={{width:"100px",height:"100px"}} />
              <p>
                Intraday  <br/> &FO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;