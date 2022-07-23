import React from "react";
import InlineInputContainer from "../common/InlineInputContainer";
import AdvButton from "../common/AdvButton";
import Form from "../common/Form";
import Input from "../common/Input";

const EditProfileForm = (props) => {
  const { updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <InlineInputContainer>
          <Input
            id="name"
            placeholder="Name"
            onChange={handleChange}
            // value={query.name}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input id="avatar" placeholder="img url" onChange={handleChange} />
        </InlineInputContainer>
        <AdvButton
          style={{ marginTop: "10px" }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Save
        </AdvButton>
      </Form>
    </div>
  );
};

export default EditProfileForm;
