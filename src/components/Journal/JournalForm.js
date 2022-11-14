import React, { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import AdvButton from "../common/AdvButton";
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
        <InlineInputContainer>
          <Select
            id="type"
            onChange={handleChange}
            type="text"
            value={query.type}
            defaultValue={"default"}
          >
            <option value={"default"}>Select Type</option>
            <option value="1">grooming</option>
            <option value="2">medical</option>
            <option value="3">exercise</option>
            <option value="4">dietary</option>
          </Select>
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
            marginTop: "10px",
            width: "auto",
            backgroundColor: "#0a55c5",
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
