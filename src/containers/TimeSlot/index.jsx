import React, { useState, useEffect } from "react";
import Select from "../../components/Select";
import { ArrowIcon } from "../../components/ArrowIcon";
import "./style.css";

const TimeSlot = ({ timeData, onChange }) => {
  const [sourceCountry, setSourceCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const isSelected = sourceCountry && destinationCountry;
  const className = `time-slot ${isSelected ? " completed" : ""}`;

  useEffect(() => {
    if (sourceCountry && destinationCountry)
      onChange({
        sourceCountry: sourceCountry.title,
        destinationCountry: destinationCountry.title,
      });
  });
  return (
    <div className={className}>
      <Select
        title={"Hour"}
        options={timeData}
        onChange={setSourceCountry}
        value={sourceCountry}
      />

      <ArrowIcon className="arrow" isActive={isSelected} />
      <Select
        title={"Minute"}
        value={destinationCountry}
        options={timeData}
        onChange={setDestinationCountry}
      />
    </div>
  );
};

export default TimeSlot;
