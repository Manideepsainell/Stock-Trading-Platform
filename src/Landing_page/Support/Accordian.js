import React, { useState } from "react";
import "./Accordion.css";

function Accordion() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left: Accordion */}
        <div className="col-lg-8 col-md-12">
          {/* Item 1 */}
          <div className="card mb-3">
            <div className="card-header p-0">
              <button
                className="btn w-100 text-start d-flex justify-content-between align-items-center accordion-btn"
                onClick={() => toggle(0)}
              >
                <span className="corner-block">
                  <img src="media/images/icon_1.png" width="60" height="60" />
                </span>
                <span className="accordion-title fs-5">Account Opening</span>
                <span className="accordion-caret">
                  {open === 0 ? (
                    <i className="fa-solid fa-angle-up"></i>
                  ) : (
                    <i className="fa-solid fa-angle-down"></i>
                  )}
                </span>
              </button>
            </div>
            <div className={`accordion-panel ${open === 0 ? "open" : ""}`}>
              <ul>
                <li><a href="#">Resident individual</a></li>
                <li><a href="#">Minor</a></li>
                <li><a href="#">Non Resident Indian (NRI)</a></li>
                <li><a href="#">Company, Partnership, HUF and LLP</a></li>
                <li><a href="#">Glossary</a></li>
              </ul>
            </div>
          </div>

          {/* Repeat for other accordion items */}
          {/* Item 2 */}
          <div className="card mb-3">
            <div className="card-header p-0">
              <button
                className="btn w-100 text-start d-flex justify-content-between align-items-center accordion-btn"
                onClick={() => toggle(1)}
              >
                <span className="corner-block">
                  <img src="media/images/icon_2.png" width="60" height="60" />
                </span>
                <span className="accordion-title fs-5">Your Zerodha Account</span>
                <span className="accordion-caret">
                  {open === 1 ? (
                    <i className="fa-solid fa-angle-up"></i>
                  ) : (
                    <i className="fa-solid fa-angle-down"></i>
                  )}
                </span>
              </button>
            </div>
            <div className={`accordion-panel ${open === 1 ? "open" : ""}`}>
              <ul>
                <li><a href="#">Your Profile</a></li>
                <li><a href="#">Account Modification</a></li>
                <li><a href="#">Client Master Report (CMR) and DP</a></li>
                <li><a href="#">Nomination</a></li>
                <li><a href="#">Transfer and conversion of securities</a></li>
              </ul>
            </div>
          </div>

          {/* Item 3 */}
      <div className="card mb-2 mt-4 ">
        <div className="card-header p-0">
          <button
            className="btn w-100 text-start d-flex justify-content-between align-items-center accordion-btn"
            onClick={() => toggle(2)}
          >
            <span className="corner-block">
              <img src="media/images/icon_7.png" alt="kite"  className="ml-5" width="45" height="40"/> 
            </span>

            <span className="accordion-title fs-5 " >Kite</span>

            <span className="accordion-caret">
              {open === 2 ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </button>
        </div>

        {/* Panel 3 */}
        <div className={`accordion-panel ${open === 2 ? "open" : ""}`}>
          <ul>
            <li><a href="#"> IPO</a></li>
            <li><a href="#">Trading FAQs</a></li>
            <li><a href="#">Margin Trading Facility (MTF) and Margins</a></li>
            <li><a href="#">Charts and orders</a></li>
            <li><a href="#">Alerts and Nudges</a></li>
            <li><a href="#">General</a></li>
          </ul>
         





        </div>
      </div>
       {/* Item 4 */}
       <div className="card mb-2 mt-4">
        <div className="card-header p-0 ">
          <button
            className="btn  w-100 text-start d-flex justify-content-between align-items-center accordion-btn"
            onClick={() => toggle(3)}
          >
            <span className="corner-block">
               <img src="media/images/icon_3.png"  width="60" height="60"/>
            </span>

            <span className="accordion-title fs-5 " >Funds</span>

            <span className="accordion-caret">
              {open === 3 ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </button>
        </div>

        {/* Panel 4 */}
        <div className={`accordion-panel ${open === 3 ? "open" : ""}`}>
          <ul>
            <li><a href="#">Add money</a></li>
            <li><a href="#">Withdraw money</a></li>
            <li><a href="#">Add bank accounts</a></li>
            <li><a href="#">eMandates</a></li>
          </ul>
          


        </div>
      </div>
               {/* Item 5 */}
     <div className="card mb-2 mt-4">
        <div className="card-header p-0">
          <button
            className="btn  w-100 text-start d-flex justify-content-between align-items-center accordion-btn"
            onClick={() => toggle(4)}
          >
            <span className="corner-block">
               <img src="media/images/icon_4.png"  width="65" height="65"/>
            </span>

            <span className="accordion-title fs-5 " >Console</span>

            <span className="accordion-caret">
              {open === 4 ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </button>
        </div>

        {/* Panel 5*/}
        <div className={`accordion-panel ${open === 4 ? "open" : ""}`}>
          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Corporate actions</a></li>
            <li><a href="#">Funds statement</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Segments</a></li>

            
          </ul>
        </div>
      </div>
       {/* Item 6 */}
       <div className="card mb-2 mt-4">
        <div className="card-header p-0">
          <button
            className="btn w-100 text-start d-flex justify-content-between align-items-center accordion-btn"
            onClick={() => toggle(5)}
          >
            <span className="corner-block">
              <img src="media/images/icon_5.png"  width="65" height="65"/>
            </span>

            <span className="accordion-title fs-5 " >Coin</span>

            <span className="accordion-caret">
              {open === 5 ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </button>
        </div>

        {/* Panel 6 */}
        <div className={`accordion-panel ${open === 5 ? "open" : ""}`}>
          <ul>
            <li><a href="#">Mutual funds</a></li>
            <li><a href="#">National Pension Scheme (NPS)</a></li>
            <li><a href="#">Fixed Deposit (FD)</a></li>
            <li><a href="#">Features on Coin</a></li>
            <li><a href="#">Payments and Orders</a></li>
            <li><a href="#">General</a></li>
          </ul>
        </div>
      </div>

        </div>

        {/* Right: Small content */}
        <div className="col-lg-4 col-md-12 mt-3 mt-lg-0" >
         <div
  style={{
    backgroundColor: "#fff7f0", // light peach background
    padding: "15px 20px",
    borderLeft: "5px solid orange", // orange left border
    borderRadius: "4px",
  }}
>
  <ul style={{ margin: 0, paddingLeft: "20px" }}>
    <li style={{ marginBottom: "8px" }}>
      <a
        href="#"
        style={{
          color: "#0073e6",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.color = "black")}
        onMouseLeave={(e) => (e.target.style.color = "#0073e6")}
      >
        Exclusion of F&O contracts on 8 securities from August 29, 2025
      </a>
    </li>
    <li>
      <a
        href="#"
        style={{
          color: "#0073e6",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.color = "black")}
        onMouseLeave={(e) => (e.target.style.color = "#0073e6")}
      >
        Revision in expiry day of Index and Stock derivatives contracts
      </a>
    </li>
  </ul>
</div>

       <table className="table table-bordered mt-4">
  <thead className="table-light">
    <tr>
      <th className="p-3">Quick links</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="#"
          className="text-decoration-none p-2"
          style={{ color: "#0073e6" }}
          onMouseEnter={(e) => (e.target.style.color = "black")}
          onMouseLeave={(e) => (e.target.style.color = "#0073e6")}
        >
          1. Track account opening
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#"
          className="text-decoration-none p-2 fs-6"
          style={{ color: "#0073e6" }}
          onMouseEnter={(e) => (e.target.style.color = "black")}
          onMouseLeave={(e) => (e.target.style.color = "#0073e6")}
        >
          2. Track segment activation
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#"
          className="text-decoration-none p-2"
          style={{ color: "#0073e6" }}
          onMouseEnter={(e) => (e.target.style.color = "black")}
          onMouseLeave={(e) => (e.target.style.color = "#0073e6")}
        >
          3. Intraday margins
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#"
          className="text-decoration-none p-2"
          style={{ color: "#0073e6" }}
          onMouseEnter={(e) => (e.target.style.color = "black")}
          onMouseLeave={(e) => (e.target.style.color = "#0073e6")}
        >
          4. Kite user manual
        </a>
      </td>
    </tr>
  </tbody>
</table>


        </div>
      </div>
    </div>
  );
}

export default Accordion;
