import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";

const Logout = (props) => {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth({
      token: null,
      profile: null,
      roles: [],
    });

    localStorage.removeItem("Token");
    localStorage.removeItem("Profile");
    localStorage.removeItem("Roles");

    alert("You are logged out");
    navigate("/");
  }, []);

  return (
    <Container
      style={{
        color: "#303030",
      }}
    ></Container>
  );
};

export default Logout;
