import React, { useState } from "react";
import CustomPer from "./CustomPer";
import Percentage from "./Percentage";

const CalculateTip = ({
  setSelectedPercentage,
  setBill,
  setPersons,
  persons,
  bill
}) => {
  const [selectedField, setSelectedField] = useState("");
  const handleBill = (e) => {
    setBill(parseInt(e.target.value));
  };
  const handlePersons = (e) => {
    setPersons(parseInt(e.target.value));
  };
  return (
    <div className="calc-tip">
      <form action="">
        <p>Bill</p>
        <div className="input-cont bill">
          <input value={bill} className="input-main" type="number" onChange={handleBill} />
        </div>
        <p>Select Tip %</p>
        <div className="per-buttons">
          <Percentage
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            setSelectedPercentage={setSelectedPercentage}
            percentage={5 / 100}
          />
          <Percentage
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            setSelectedPercentage={setSelectedPercentage}
            percentage={10 / 100}
          />
          <Percentage
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            setSelectedPercentage={setSelectedPercentage}
            percentage={15 / 100}
          />
          <Percentage
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            setSelectedPercentage={setSelectedPercentage}
            percentage={25 / 100}
          />
          <Percentage
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            setSelectedPercentage={setSelectedPercentage}
            percentage={50 / 100}
          />
          <CustomPer
            selectedField={selectedField}
            setSelectedPercentage={setSelectedPercentage}
            setSelectedField={setSelectedField}
          />
        </div>
        <p>Number of People</p>
        <div
          className={
            persons === 0 ? "input-cont people zero-check" : "input-cont people"
          }
        >
          <input
            value={persons}
            className="input-main"
            type="number"
            onChange={handlePersons}
          />
        </div>
      </form>
    </div>
  );
};

export default CalculateTip;
