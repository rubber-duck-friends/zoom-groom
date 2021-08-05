const Dropdown = ({id, value, setValue, options, name}) => {

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <label htmlFor={id}>
      {name}:
      <select
        id={id}
        name={id}
        onChange={handleChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
