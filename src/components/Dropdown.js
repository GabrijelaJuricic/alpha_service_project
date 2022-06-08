import "./Dropdown.css";

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <label className="dropdown-container">
      <div className="label">{label}</div>
      <select value={value} onChange={onChange} className="dropdown-close">
        {options.map((option) => (
          <option className="dropdown-open" value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};
export default Dropdown;
