import React from 'react';

function Universe() {
  return (
    <div className="container mt-8">
      {/* Heading & Description */}
      <div className="row text-center">
        <div className="col-12">
          <h2 className="fs-3 text-muted" >The Zerodha Universe</h2>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Logos Row */}
      <div className="row text-center">
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="Smallcase" className="img-fluid" style={{height:"55px",maxWidth:"100%"}} />
          <p className="text-small text-muted">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" alt="Partner 2" className="img-fluid" style={{height:"55px",maxWidth:"100%"}} />
          <p className="text-small text-muted">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/tijori.svg" alt="Partner 3" className="img-fluid" style={{height:"55px",maxWidth:"100%"}}/>
          <p className="text-small text-muted">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="Smallcase" className="img-fluid" style={{height:"55px",maxWidth:"100%"}} />
          <p className="text-small text-muted">Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Partner 2" className="img-fluid" style={{height:"55px",maxWidth:"100%"}} />
          <p className="text-small text-muted">Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="Partner 3" className="img-fluid " style={{height:"55px",maxWidth:"100%"}} />
          <p className="text-small text-muted">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>

        </div>
         <button className="p-2 btn btn-primary fs-5 "style= {{margin:"0 auto",width:"18%" }}>Sign Up for free</button>
      </div>
    </div>
  );
}

export default Universe;
