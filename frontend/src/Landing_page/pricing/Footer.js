import React from "react";

function Footer() {
  return (
    <div className="charges-wrapper">
      <style>
        {`
          .charges-wrapper .charges-container {
            display: flex;
            justify-content: center;
            gap: 60px;   /* spacing between left & right */
            margin-top: 30px;
            padding:8px;
          }

          .charges-wrapper .charges-box {
            width: 80%;   /* compact width */
            text-align: justify;
          }

          .charges-wrapper .charges-box h4 {
            font-size: 15px;   /* reduced heading size */
            margin-bottom: 6px;
          }

          .charges-wrapper .charges-box p,
          .charges-wrapper .charges-box li {
            font-size: 12px;   /* reduced font */
            line-height: 1.5;
            margin-bottom: 12px;
          }

          .charges-wrapper .charges-box ul {
            margin-left: 8px;
          }
        `}
      </style>

      <div className="charges-container">
        {/* Left Section */}
        <div className="charges-box">
          <h4>Securities/Commodities transaction tax</h4>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h4>Transaction/Turnover Charges</h4>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other
            non-exclusive scrips … ₹375 per crore of turnover on flat rate basis
            w.e.f. December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h4>Call & trade</h4>
          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <h4>Stamp charges</h4>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h4>NRI brokerage charges</h4>
          <ul>
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>₹500 + GST as yearly account maintenance charges (AMC).</li>
          </ul>

          <h4>Account with debit balance</h4>
          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <h4>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h4>
          <ul>
            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>

          <h4>Margin Trading Facility (MTF)</h4>
          <p>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.  
            MTF Brokerage: 0.3% or ₹20/executed order, whichever is lower.  
            MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
          </p>
        </div>

        {/* Right Section */}
        <div className="charges-box">
          <h4>GST</h4>
          <p>
            Tax levied by the government on the services rendered. 18% of
            (brokerage + SEBI charges + transaction charges).
          </p>

          <h4>SEBI Charges</h4>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h4>DP (Depository participant) charges</h4>
          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
            charged on the trading account ledger when stocks are sold.
          </p>

          <h4>Pledging charges</h4>
          <p>₹30 + GST per pledge request per ISIN.</p>

          <h4>AMC (Account maintenance charges)</h4>
          <p>For BSDA demat account: Zero charges if value &lt; ₹4,00,000.</p>
          <p>For non-BSDA accounts: ₹300/year + 18% GST charged quarterly.</p>

          <h4>Corporate action order charges</h4>
          <p>₹20 + GST for OFS / buyback / takeover / delisting orders.</p>

          <h4>Off-market transfer charges</h4>
          <p>₹25 per transaction.</p>

          <h4>Physical CMR request</h4>
          <p>First CMR request free. ₹20 + ₹100 courier + 18% GST after that.</p>

          <h4>Payment gateway charges</h4>
          <p>₹9 + GST (not levied on UPI).</p>

          <h4>Delayed Payment Charges</h4>
          <p>Interest 18% yearly (0.05% per day) on debit balance.</p>

          <h4>Trading using 3-in-1 account</h4>
          <p>Delivery & MTF Brokerage: 0.5% per executed order.</p>
          <p>Intraday Brokerage: 0.05% per executed order.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
