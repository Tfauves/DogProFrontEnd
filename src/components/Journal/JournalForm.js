import React, { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import AdvButton from "../common/AdvButton";
// import TypeDropdown from "../EntryDropdown/TypeDropdown";

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
      <div>
        <Form
          onSubmit={handleSubmit}
          style={{ maxWidth: "800px", width: "100" }}
        >
          {/* <InlineInputContainer>
            <div style={{ marginBottom: "100px" }}>
              <TypeDropdown value={value} />
            </div>
          </InlineInputContainer> */}
          <InlineInputContainer>
            <Input
              id="type"
              placeholder="type"
              type="text"
              onChange={handleChange}
              value={value.type}
              required
            />
          </InlineInputContainer>
          <InlineInputContainer>
            <Input
              id="activity"
              placeholder="activity"
              type="text"
              onChange={handleChange}
              value={value.activity}
              required
            />
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
