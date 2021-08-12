import React from "react";

const DateInput = ({id, value, name, updateValue}) => {

  const handleChange = (event) => {
    updateValue(event.target.value)
  }

  return (
    <label htmlFor={id}>
      {name}
      <input
        type="date"
        value={value}
        id={id}
        onChange={handleChange}
      />
    </label>
  );
};

export default DateInput;
