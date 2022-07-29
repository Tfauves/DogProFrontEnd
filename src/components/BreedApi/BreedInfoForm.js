import React, { useState } from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import AdvButton from "../common/AdvButton";

const BreedInfoForm = (props) => {
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
      <div style={{ marginTop: "12em" }}>
        <Form
          onSubmit={handleSubmit}
          style={{ maxWidth: "800px", width: "100" }}
        >
          <h4>Enter Breed Name</h4>
          <InlineInputContainer>
            <Input
              id="breedName"
              placeholder="Breed Name"
              type="text"
              onChange={handleChange}
              value={value.type}
              required
            />
          </InlineInputContainer>
          <AdvButton
            style={{ marginTop: "10px" }}
            variant="primary"
            size="lg"
            type="submit"
          >
            Search
          </AdvButton>
        </Form>
      </div>
    </div>
  );
};

export default BreedInfoForm;
