import React, { useState } from "react";
import "./ChargesTable.css"; // external css for clean styles

function ChargesTable() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="charges-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "equity" ? "active" : ""}
          onClick={() => setActiveTab("equity")}
        >
         <h3 className="p-3 ">Equity</h3> 
        </button>
        <button
          className={activeTab === "currency" ? "active" : ""}
          onClick={() => setActiveTab("currency")}
        >
          <h3 className="p-3">Currency</h3>
        </button>
        <button
          className={activeTab === "commodity" ? "active" : ""}
          onClick={() => setActiveTab("commodity")}
        >
          <h3 className="p-3">Commodity</h3>
        </button>
      </div>

      {/* Equity Table */}
      {activeTab === "equity" && (
        <table className="charges-table ml-4">
          <thead>
            <tr>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O - Futures</th>
              <th>F&amp;O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul>
                  <li>0.125% of intrinsic value on exercised options</li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
              <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
              <td>NSE: 0.00173% <br /> BSE: 0</td>
              <td>NSE: 0.03503% (premium) <br /> BSE: 0.0325% (premium)</td>
            </tr>
            <tr>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
            </tr>
            <tr>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      )}

      {/* Currency Table */}
      {activeTab === "currency" && (
        <table className="charges-table">
          <thead>
            <tr>
              <th>Currency Futures</th>
              <th>Currency Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>₹20 per executed order</td>
            </tr>
            <tr>
              <td>No STT</td>
              <td>No STT</td>
            </tr>
            <tr>
              <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
              <td>NSE: 0.0311% <br /> BSE: 0.001%</td>
            </tr>
            <tr>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
            </tr>
            <tr>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      )}

      {/* Commodity Table */}
      {activeTab === "commodity" && (
        <table className="charges-table">
          <thead>
            <tr>
              <th>Commodity Futures</th>
              <th>Commodity Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>₹20 per executed order</td>
            </tr>
            <tr>
              <td>0.01% on sell side (Non-Agri)</td>
              <td>0.05% on sell side</td>
            </tr>
            <tr>
              <td>MCX: 0.0021% <br /> NSE: 0.0001%</td>
              <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
            </tr>
            <tr>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
              <td>18% on (brokerage + SEBI + transaction charges)</td>
            </tr>
            <tr>
              <td>
                Agri: ₹1 / crore <br /> Non-Agri: ₹10 / crore
              </td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      )}
      <h4 className="mt-5 mb-10 fs-5 text-center " ><a href="" style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</h4>
       <h3 className="mt-5 mb-5">Charges for account opening</h3>
<table className="charges-table">
  <thead>
    <tr>
      <th>Type of account</th>
      <th>Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Online account</td>
      <td>
        <span style={{
          backgroundColor: "#28a745",
          fontSize: "14px",
          padding: "4px 10px",
          borderRadius: "4px",
          color: "#fff",
          fontWeight: "600"
        }}>
          FREE
        </span>
      </td>
    </tr>
    <tr>
      <td>Offline account</td>
      <td>
        <span style={{
          backgroundColor: "#28a745",
          fontSize: "14px",
          padding: "4px 10px",
          borderRadius: "4px",
          color: "#fff",
          fontWeight: "600"
        }}>
          FREE
        </span>
      </td>
    </tr>
    <tr>
      <td>NRI account (offline only)</td>
      <td>₹ 500</td>
    </tr>
    <tr>
      <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
      <td>₹ 500</td>
    </tr>
  </tbody>
</table>
<h3 className="mt-5 mb-3">Demat AMC (Annual Maintenance Charge)</h3>
<table className="charges-table">
  <thead>
    <tr>
      <th>Value of holdings</th>
      <th>AMC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Up to ₹4 lakh</td>
      <td>
        <span style={{
          backgroundColor: "#28a745",
          fontSize: "14px",
          padding: "4px 10px",
          borderRadius: "4px",
          color: "#fff",
          fontWeight: "600"
        }}>
          FREE*
        </span>
      </td>
    </tr>
    <tr>
      <td>₹4 lakh – ₹10 lakh</td>
      <td>₹ 100 per year, charged quarterly*</td>
    </tr>
    <tr>
      <td>Above ₹10 lakh</td>
      <td>₹ 300 per year, charged quarterly</td>
    </tr>
  </tbody>
</table>

<p style={{ fontSize: "13px", marginTop: "10px", color: "#555" }}>
  * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). 
  BSDA account holders cannot hold more than one demat account. 
  To learn more about BSDA, <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>click here</a>.
</p>
<h3 className="mt-5 mb-3">Charges for optional value added services</h3>
<table className="charges-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>Billing Frequency</th>
      <th>Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tickertape</td>
      <td>Monthly / Annual</td>
      <td>Free: 0 | Pro: 249/2399</td>
    </tr>
    <tr>
      <td>Smallcase</td>
      <td>Per transaction</td>
      <td>Buy &amp; Invest More: 100 | SIP: 10</td>
    </tr>
    <tr>
      <td>Kite Connect</td>
      <td>Monthly</td>
      <td>Connect: 500</td>
    </tr>
  </tbody>
</table>

    </div>

    
  );
}

export default ChargesTable;
