import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./select.scss";

const Select = ({ options, label, name }) => {
  const [labels, setLabels] = useState([]);
  const [selected, setSelected] = useState(options);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
    }
};

useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
}, []);
  const addValue = (option) => {
    setLabels((prev) => [option, ...prev]);
    setSelected((prev) => prev.filter((item) => item !== option));
  };
  const removeValue = (option) => {
    setLabels((prev) => prev.filter((item) => item !== option));
    setSelected((prev) => [option, ...prev]);
  };
  const selectToggle = () => {
    setOpen(!open);
  };

  const Options = ({ options }) =>
    options.map((option) => (
      <li
        key={option.value}
        data-value={option.value}
        onClick={() => addValue(option)}
      >
        {option.label}
      </li>
    ));

  const Tag = ({ option }) => (
    <span className="tag" data-value={option.value}>
      <div>{option.label}</div>
      <button className="tag-xmark" onClick={() => removeValue(option)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </span>
  );

  return (
    <fieldset className="select">
      <legend className="select-label">{label}</legend>
      <div ref={ref} className="select-container">
        <input name={name} placeholder="Выбрать" onClick={selectToggle} />
        {selected.length ? (
          <div className={`select-dropdown ${open && "open"}`}>
            <ul className="select-list">
              <Options options={selected} />
            </ul>
          </div>
        ) : ''}
      </div>
      {labels.map((tag) => (
        <Tag key={tag.value} option={tag} />
      ))}
    </fieldset>
  );
};
export default Select;
