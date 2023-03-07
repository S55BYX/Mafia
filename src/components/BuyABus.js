import React from "react";

function BuyABus() {
  return (
    <div className="right-main">
      <div className="page-title">
        <h1>Buy a Business</h1>
      </div>
      <div>
        What you own
        <div className="yourBus">
            <p>Car Wash</p>
            <p>Daily return: £500</p>
            <button>Upgrade</button>
            <button>Sell</button>
        </div>
      </div>
      <div className="car-container">enter Business</div>
    </div>
  );
}

export default BuyABus;
