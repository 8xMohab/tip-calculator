function Percentage({
  selectedField,
  setSelectedField,
  percentage,
  setSelectedPercentage,
}) {
  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedField(`${percentage}%`);
    setSelectedPercentage(percentage);
  };
  return (
    <button
      onClick={handleSelect}
      className={
        selectedField === `${percentage}%`
          ? "percentage selected"
          : "percentage"
      }
    >
      {percentage * 100}%
    </button>
  );
}

export default Percentage;
