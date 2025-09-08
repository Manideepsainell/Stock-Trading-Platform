import React from "react";

const Summary = () => {
  // Default values for a new user
  const marginAvailable = 0;
  const marginsUsed = 0;
  const openingBalance = 0;
  const holdingsCount = 0;
  const pnl = 0;
  const pnlPercentage = 0;
  const currentValue = 0;
  const investment = 0;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{marginAvailable}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{marginsUsed}</span>
            </p>
            <p>
              Opening balance <span>{openingBalance}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdingsCount})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {pnl} <small>{pnlPercentage >= 0 ? `+${pnlPercentage}%` : `${pnlPercentage}%`}</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue}</span>
            </p>
            <p>
              Investment <span>{investment}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
