import { useRef, useState } from "react";

function CustomPer({ setSelectedField, selectedField, setSelectedPercentage }) {
  const inputRef = useRef(null);
  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedField("custom");
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  };
  return selectedField === "custom" ? (
    <input
      ref={inputRef}
      className="input-custom"
      type="number"
      onChange={(e) => {
        setSelectedPercentage(parseInt(e.target.value) / 100);
      }}
    />
  ) : (
    <button onClick={handleSelect} className="percentage custom-per">
      Custom
    </button>
  );
}

export default CustomPer;
