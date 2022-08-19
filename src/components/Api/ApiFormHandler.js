import React, { useState, useContext, Fragment } from "react";
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
      setQuery({ breedName: "" });
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const displayInfo = () => {
    return (
      <div
        style={{
          marginTop: "3em",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          minWidth: "100px",
        }}
      >
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
          justifyContent: "center",
          marginTop: "-3em",
          width: "75%",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <div>
          <ApiForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
        </div>
      </div>
      <div
        style={{
          marginTop: "50em",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          minWidth: "100px",
        }}
      >
        {displayInfo()}
      </div>
    </Fragment>
  );
};
export default ApiFormHandler;
