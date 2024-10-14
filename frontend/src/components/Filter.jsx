import React from "react";

const Filter = ({ onFilterChange }) => {
  const handleAgeChange = (event) => {
    onFilterChange({ age: event.target.value });
  };

  const handleGenderChange = (event) => {
    onFilterChange({ gender: event.target.value });
  };

  return (
    <div>
      <label>Age Group: </label>
      <select onChange={handleAgeChange}>
        <option value="">Select</option>
        <option value="15-25">15-25</option>
        <option value=">25">25</option>
      </select>

      <label>Gender: </label>
      <select onChange={handleGenderChange}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default Filter;
