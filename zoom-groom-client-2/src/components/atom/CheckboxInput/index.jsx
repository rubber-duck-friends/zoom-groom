import React from "react";

const CheckboxInput = ({id, value, name, updateValue}) => {

  const handleChange = (event) => {
    updateValue(event.target.value)
  }

  return (
    <label htmlFor={id}>
      {name}
      <input
        type="checkbox"
        value={value}
        id={id}
        onChange={handleChange}
      />
    </label>
  );
};

export default CheckboxInput;
