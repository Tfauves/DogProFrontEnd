import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import ApiForm from "./ApiForm";

const ApiFormHandler = (props) => {
  const [info, setInfo] = useState([]);
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
      // console.log(data.breedName);
      const res = await axios.get(
        `${apiHost}/api/info/breed/${data.breedName}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setInfo(res.data);
    } catch (err) {
      alert(err.response.data.message);
    }
    // console.log(info[0].name);
    // console.log(info[1].name);
  };
  const displayInfo = () => {
    return (
      <div>
        <ul>
          {info.map((info) => (
            <li key={info.id}>{info.temperament}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "6em" }}>
      <h1 style={{ textAlign: "center" }}>Breed Info Finder</h1>
      <ApiForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
      {displayInfo()}
    </div>
  );
};
export default ApiFormHandler;
