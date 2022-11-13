import React from "react";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import AdvButton from "../common/AdvButton";
import image from "../../assets/loginSplash.jpg";
import packimg from "../../assets/dogPack.jpg";

const NewUserForm = (props) => {
  const { query, updateForm, onSubmit } = props;
  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${packimg})`,
        backgroundSize: "cover",
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        margin: "3rem 0rem",
        padding: "8px",
        width: "1000px",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          width: "100%",
          marginTop: "20em",
        }}
      >
        <InlineInputContainer>
          <Input
            id="fname"
            placeholder="First Name"
            onChange={handleChange}
            value={query.fname}
          />
          <Input
            id="lname"
            placeholder="Last Name"
            onChange={handleChange}
            value={query.lname}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="username"
            placeholder="Email address"
            type="email"
            onChange={handleChange}
            value={query.username}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={query.password}
          />
          <Input
            id="confirm"
            placeholder="Confirm Password"
            type="password"
            onChange={handleChange}
            value={query.confirm}
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
          Sign Up
        </AdvButton>
      </Form>
    </div>
  );
};

export default NewUserForm;
