import React from "react";

const TextInput = ({id, value, name, updateValue}) => {

  const handleChange = (event) => {
    updateValue(event.target.value)
  }

  return (
    <label htmlFor={id}>
      {name}
      <input
        type="text"
        value={value}
        id={id}
        onChange={handleChange}
      />
    </label>
  );
};

export default TextInput;
