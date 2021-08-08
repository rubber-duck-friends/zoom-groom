import React from "react";

const NumberInput = ({id, value, name, updateValue}) => {

  const handleChange = (event) => {
    updateValue(event.target.value)
  }

  return (
    <label htmlFor={id}>
      {name}
      <input
        type="number"
        value={value}
        id={id}
        onChange={handleChange}
      />
    </label>
  );
};

export default NumberInput;
