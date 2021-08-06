import React from "react";

const PasswordInput = ({id, value, name, updateValue}) => {

  const handleChange = (event) => {
    updateValue(event.target.value)
  }

  return (
    <label htmlFor={id}>
      {name}
      <input
        type="password"
        value={value}
        id={id}
        onChange={handleChange}
      />
    </label>
  );
};

export default PasswordInput;
