import React, { useState, useContext, useEffect, Fragment } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import ApiForm from "./ApiForm";
import Breed from "./Breed";

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
  };

  const displayInfo = () => {
    return (
      <div>
        {info.map((info) => (
          <Breed breed={info} key={info.id} />
        ))}
      </div>
    );
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
      >
        <ApiForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
      </div>
      {displayInfo()}
    </Fragment>
  );
};
export default ApiFormHandler;
