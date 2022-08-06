import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import ApiForm from "./ApiForm";

const ApiFormHandler = (props) => {
  const { breedName } = props;
  const [query, setQuery] = useState({
    breedName: "",
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
    try {
      console.log(data.breedName);
      const res = await axios.get(
        `${apiHost}/api/info/breed/${data.breedName}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      alert(err.response.data.message);
    }
    // console.log(info[0].name);
    // console.log(info[1].name);
  };

  return (
    <div style={{ marginTop: "6em" }}>
      <h1 style={{ textAlign: "center" }}>Breed Info Finder</h1>
      <ApiForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
    </div>
  );
};
export default ApiFormHandler;
