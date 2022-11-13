import React, { useState, useContext } from "react";
import NewUserForm from "./NewUserForm";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import loginbackground from "../../assets/loginbackground.jpg";
import { apiHost } from "../../config";
import Splash from "../common/Splash";
import packimg from "../../assets/dogPack.jpg";

const Register = () => {
  let navigate = useNavigate();

  const [query, setQuery] = useState({
    username: "",
    password: "",
    confirm: "",
    fname: "",
    lname: "",
  });

  const [auth, setAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (e) => {
    //validation
    if (query.password !== query.confirm) {
      alert("Passwords do not match");
      return;
    }
    const data = query;
    data.name = query.fname + " " + query.lname;
    try {
      const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
      const res = await axios.post(`${host}/api/auth/signup`, data);

      login(data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const login = async (data) => {
    try {
      const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
      const res = await axios.post(`${host}/api/auth/signin`, data);
      // alert(res.data.token);
      createProfile(data, res.data.token);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const createProfile = async (data, token) => {
    data.email = data.username;
    try {
      const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
      const res = await axios.post(`${host}/api/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setAuth({ token, name: res.data.name });
      alert(res.data.id);
      navigate("/profile");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          marginTop: "1em",
          paddingBottom: ".5em",
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "8px",
          zIndex: 9,
        }}
      >
        Join The Pack
      </h1>

      <div>
        <NewUserForm
          query={query}
          updateForm={updateForm}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
