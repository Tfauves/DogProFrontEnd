import React from "react";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import AdvButton from "../common/AdvButton";
import Form from "../common/Form";

const ApiForm = (props) => {
  const { updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <InlineInputContainer>
          <Input
            id="breedName"
            placeholder="Breed Name"
            onChange={handleChange}
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
  );
};

export default ApiForm;
