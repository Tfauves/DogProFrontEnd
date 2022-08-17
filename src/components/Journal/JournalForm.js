import React, { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import AdvButton from "../common/AdvButton";
import TypeSelect from "../EntryDropdown/TypeSelect";
import Select from "./../common/Select";

const JournalForm = (props) => {
  const { query, updateForm, onSubmit } = props;
  const [value, setValue] = useState({});

  const handleSelect = (e) => {
    setValue(e);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <Form onSubmit={handleSubmit} style={{ maxWidth: "800px", width: "100" }}>
        <InlineInputContainer>{/* <TypeSelect /> */}</InlineInputContainer>
        <InlineInputContainer>
          <Select
            id="type"
            placeholder="type"
            type="text"
            onChange={handleChange}
            value={query.type}
            required
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="activity"
            placeholder="activity"
            type="text"
            onChange={handleChange}
            value={query.activity}
            required
          />
        </InlineInputContainer>

        <AdvButton
          style={{
            width: "auto",
            backgroundColor: "#0a55c5",
            marginTop: ".5em",
          }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Submit
        </AdvButton>
      </Form>
    </div>
  );
};

export default JournalForm;
