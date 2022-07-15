import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const TypeDropdown = (props) => {
  const { updateForm, onSubmit } = props;
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  return (
    <div>
      <h3>New Entry</h3>
      <DropdownButton
        // alignRight
        title="Select Type"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Item onChange={handleChange} eventKey="Activity-1">
          1
        </Dropdown.Item>
        <Dropdown.Item onChange={handleChange} eventKey="Activity-2">
          2
        </Dropdown.Item>
        <Dropdown.Item onChange={handleChange} eventKey="Activity-3">
          3
        </Dropdown.Item>
      </DropdownButton>
      <h4>{value}</h4>
    </div>
  );
};
export default TypeDropdown;
