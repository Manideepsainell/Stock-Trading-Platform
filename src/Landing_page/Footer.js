import React from "react";

function Footer() {
  return (
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/logo.svg" alt="logo" style={{ width: "50%" }} />
          <p className="mt-3"> &copy;2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        </div>

        <div className="col">
          <p>Account</p>
          <a href=""class="footer-link">Open demat account</a><br />
          <a href=""class="footer-link">Minor demat account</a><br />
          <a href=""class="footer-link">NRI demat account</a><br />
          <a href=""class="footer-link">Commodity</a><br />
          <a href=""class="footer-link">Dematerialisation</a><br />
          <a href=""class="footer-link">Fund transfer</a><br />
          <a href=""class="footer-link">MTF</a><br />
          <a href=""class="footer-link">Referral program</a><br />
        </div>

        <div className="col">
          <p>Support</p>
          <a href=""class="footer-link">Contact us</a><br />
          <a href=""class="footer-link">Support portal</a><br />
          <a href=""class="footer-link">How to file a complaint?</a><br />
          <a href=""class="footer-link">Status of your complaints</a><br />
          <a href=""class="footer-link">Bulletin</a><br />
          <a href=""class="footer-link">Circular</a><br />
          <a href=""class="footer-link">Z-Connect blog</a><br />
          <a href=""class="footer-link">Downloads</a><br />
        </div>

        <div className="col">
          <p>Company</p>
          <a href=""class="footer-link">About</a><br />
          <a href=""class="footer-link">Philosophy</a><br />
          <a href=""class="footer-link">Press & media</a><br />
          <a href=""class="footer-link">Careers</a><br />
          <a href=""class="footer-link">Zerodha Cares (CSR)</a><br />
          <a href=""class="footer-link">Zerodha.tech</a><br />
          <a href=""class="footer-link">Open source</a><br />
        </div>

        <div className="col">
          <p>Quick links</p>
          <a href=""class="footer-link">Upcoming IPOs</a><br />
          <a href=""class="footer-link">Brokerage charges</a><br />
          <a href=""class="footer-link">Market holidays</a><br />
          <a href=""class="footer-link">Economic calendar</a><br />
          <a href=""class="footer-link">Calculators</a><br />
          <a href=""class="footer-link">Markets</a><br />
          <a href=""class="footer-link">Sectors</a><br />
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="mt-5 footer-disclaimer">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633
          CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
          J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking
          please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>.
          Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on
          <a href="#"> SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
          Benefits: Effective Communication, Speedy redressal of grievances.
        </p>

        <p>
          <a href="#">Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a>
        </p>

        <p>
          Investments in securities market are subject to market risks; read all related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system
          w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly
          from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India's largest broker based on networth as per NSE. NSE broker factsheet.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
          Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued
          in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done
          through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again
          when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue
          a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make
          payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we
          don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to
          be part of Zerodha and offering such services, please <a href="#">create a ticket here</a>.
        </p>
      </div>

      {/* Footer Styles */}
      <style>
        {`
          .footer-disclaimer {
            font-size: 11px;
            color: rgb(173,181,189);
            line-height: 1.5;
            letter-spacing: 0.2px;
            font-weight: 400;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          }
          .footer-disclaimer a {
            color: rgb(173,181,189);
            text-decoration-color: rgb(173,181,189);
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
