import React, { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import AdvButton from "../common/AdvButton";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import TextArea from "../common/TextArea";
import JournalEntry from "./JournalEntry";
import JournalEntryForm from "./JournalEntryForm";

const JournalForm = (props) => {
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
      <h1>journal</h1>
      <div>
        <JournalEntryForm
          query={value}
          updateForm={updateForm}
          onSubmit={onSubmit}
        />
        {/* <DropdownButton
          // alignRight
          title="Select Activity"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item onChange={handleChange} eventKey="Activity-1">
            Activity-1
          </Dropdown.Item>
          <Dropdown.Item onChange={handleChange} eventKey="Activity-2">
            Activity-2
          </Dropdown.Item>
          <Dropdown.Item onChange={handleChange} eventKey="Activity-3">
            Activity-3
          </Dropdown.Item>
        </DropdownButton>
        <h4>{value}</h4> */}
        <Form
          onSubmit={handleSubmit}
          style={{ maxWidth: "800px", width: "100" }}
        >
          <InlineInputContainer>
            <TextArea />
          </InlineInputContainer>
          <AdvButton
            style={{ marginTop: "10px" }}
            variant="primary"
            size="lg"
            type="submit"
          >
            Submit
          </AdvButton>
        </Form>
      </div>
    </div>
  );
};

export default JournalForm;
