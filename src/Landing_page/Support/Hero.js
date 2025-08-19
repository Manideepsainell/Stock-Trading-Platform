import React from 'react';

function Hero() {
    return (
        <div className='search-portal '  style={{ minHeight: "220px" }}>
        <div className="container" >
            {/* Top row: Title + Button */}
            <div className="d-flex justify-content-between align-items-center mb-2">
            <p className='supp'>
  Support Portal
</p>



                <button
  className="btn mt-3"
  style={{
    backgroundColor: "#0073e6",
    color: "#ffffff",
    border: "1px solid #0073e6",
    fontWeight:"600"
  }}
>
  My tickets
</button>

            </div>

            {/* Search box */}
        <div 
  className="input-group mt-2" 
  style={{ minHeight: "60px" }}
>
  <span className="input-group-text bg-white border-0">
    <i className="fa-solid fa-magnifying-glass text-muted"></i>
  </span>
  <input
    type="text"
    className="form-control border-0 text-muted"
    placeholder="Eg: How do I open my account, How do I activate F&O..."
    style={{ boxShadow: "none" }}
  />
</div>
         </div>
        </div>
    );
}

export default Hero;
