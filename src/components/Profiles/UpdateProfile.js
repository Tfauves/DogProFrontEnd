import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import EditProfileForm from "./EditProfileForm";
import { apiHost } from "../../config";
import Splash from "../common/Splash";
import banner from "../../assets/banner.jpg";
import { Container } from "react-bootstrap";

const UpdatedProfile = () => {
  let navigate = useNavigate();

  const [query, setQuery] = useState({
    name: "",
    avatar: "",
  });

  const [auth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (token) => {
    const data = query;
    data.avatar = { url: data.avatar };
    try {
      const res = await axios.put(`${apiHost}/api/profile/`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
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
        minHeight: "100vh",
      }}
    >
      <Splash image={banner} style={{ height: "25vh", width: "100%" }} />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginRight: "6em",
        }}
      >
        <EditProfileForm
          query={query}
          updateForm={updateForm}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
export default UpdatedProfile;
