import React from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import bark from "../../assets/barkalt1.jpg";
import Splash from "../common/Splash";
import Container from "react-bootstrap/esm/Container";
import AdvButton from "../common/AdvButton";

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
        backgroundImage: `url(${bark})`,
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
          marginTop: "20em",
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
        <AdvButton
          style={{
            marginTop: ".5em",
            width: "auto",
            backgroundColor: "#0a55c5",
          }}
          variant="primary"
          size="lg"
          type="submit"
        >
          Login
        </AdvButton>
      </Form>
    </div>
  );
};

export default LoginForm;
