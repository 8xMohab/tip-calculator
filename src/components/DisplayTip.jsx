import React from "react";

function DisplayTip({
  selectedPercentage,
  bill,
  persons,
  setSelectedPercentage,
  setPersons,
  setBill,
}) {
  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="display-tip">
      <div className="per-person">
        <div className="text-box">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p className="tip-amount">
          {Number.isNaN(selectedPercentage * bill)
            ? "$0.00"
            : dollarUS.format(selectedPercentage * bill)}
        </p>
      </div>
      <div className="total">
        <div className="text-box">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className="tip-amount">
          {Number.isNaN(selectedPercentage * bill * persons)
            ? "$0.00"
            : dollarUS.format(selectedPercentage * bill * persons)}
        </p>
      </div>
      <div className="reset-cont">
        <button
          className="reset-btn"
          onClick={() => {
            setBill("");
            setPersons("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default DisplayTip;
