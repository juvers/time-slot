import React, { useState, useEffect, createRef } from "react";
import "./style.css";
import { DropdownArrowIcon } from "../ArrowIcon";

const Select = (props) => {
  const { title, value, options, displayProperty, valueProperty } = props;
  const [state, setState] = useState({ isOpen: false });
  const ref = createRef();

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setState({ ...state, isOpen: false });
  };

  const onChange = (item) => {
    const { onChange } = props;
    setState({ ...state, isOpen: false });
    onChange && onChange(item);
  };
  const onOpen = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const items = options.map((item) => (
    <li
      key={item[valueProperty]}
      className="item"
      onClick={() => onChange(item)}
    >
      <img
        className="flag"
        src={item.icon}
        alt={`Флаг ${item[displayProperty]}`}
      />
      {item[displayProperty]}
    </li>
  ));

  //   handle clickaway listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });

  return (
    <div className="select" ref={ref}>
      <div className="content" onClick={onOpen}>
        <div className="wrapper">
          <span className={`title${value ? " up" : ""}`}>{title}</span>
          {value ? (
            <span className="name">{value[displayProperty]}</span>
          ) : null}
        </div>
        <DropdownArrowIcon className="arrow" isActive={state.isOpen} />
      </div>
      {state.isOpen ? <ul className="options">{items}</ul> : null}
    </div>
  );
};

Select.defaultProps = {
  title: "",
  value: null,
  options: [],
  displayProperty: "title",
  valueProperty: "id",
};

export default Select;
