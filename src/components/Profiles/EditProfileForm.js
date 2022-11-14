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
      <Form
        onSubmit={handleSubmit}
        style={{
          marginTop: "6em",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Update Profile</h1>
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
          style={{
            width: "auto",
            backgroundColor: "#0a55c5",
            marginTop: ".5em",
          }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Update
        </AdvButton>
      </Form>
    </div>
  );
};

export default EditProfileForm;
