import React from 'react';

function Leftsec({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, coin }) {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 text-center'>
                    <img src={imageURL} className="img-fluid mt-4" alt={productName} />
                </div>

                <div className='col-md-6'>
                    <h1 className='fs-4 mb-3'>{productName}</h1>
<p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
    {productDescription}
</p>


                    <div className='mt-4'>
                        {/* Only show Try Demo if value is passed */}
                        {tryDemo && (
                            <a href={tryDemo} className='text-primary' style={{ textDecoration: "none" }}>
                                Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}

                        {/* Only show Learn More if value is passed */}
                        {learnMore && (
                            <a href={learnMore} className='text-primary' style={{ marginLeft: "50px", textDecoration: "none" }}>
                                Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}
                    </div>

                    {/* Only show Coin if value is passed */}
                    {coin && (
                        <a href={coin} className='text-primary' style={{ display: "inline-block", marginTop: "15px", textDecoration: "none" }}>
                            Coin <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    )}

                    <div className='mt-4'>
                        {googlePlay && (
                            <a href={googlePlay}>
                                <img src="media/images/googlePlayBadge.svg" style={{ marginRight: "50px", maxWidth: "100%", height: "45px" }} alt="Google Play" />
                            </a>
                        )}

                        {appStore && (
                            <a href={appStore}>
                                <img src="media/images/appstoreBadge.svg" style={{ maxWidth: "100%", height: "45px" }} alt="App Store" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftsec;
