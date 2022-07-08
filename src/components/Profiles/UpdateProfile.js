import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import EditProfileForm from "./EditProfileForm";

const UpdatedProfile = () => {
  const host = "http://localhost:8080";

  let navigate = useNavigate();

  const [query, setQuery] = useState({
    name: "",
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
      const res = await axios.put(`${host}/api/profile`, data, {
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
    <EditProfileForm
      query={query}
      updateForm={updateForm}
      onSubmit={onSubmit}
    />
  );
};
export default UpdatedProfile;
