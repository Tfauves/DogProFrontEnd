import React from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import Button from "react-bootstrap/Button";
import image from "../../assets/loginSplash.jpg";

const LoginForm = ({ query, submitting, updateForm, onSubmit }) => {
  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        margin: "1rem 0rem",
        padding: "8px",
        maxWidth: "900px",
        width: "100%",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <InlineInputContainer>
          <Input
            id="username"
            placeholder="Email address"
            type="email"
            onChange={handleChange}
            value={query.username}
            required
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={query.password}
            required
          />
        </InlineInputContainer>
        <Button
          style={{ marginTop: "10px" }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
