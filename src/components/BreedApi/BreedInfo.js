import React, { useState, useContext } from "react";
import axios from "axios";
import BreedInfoForm from "./BreedInfoForm";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "./../../config";
import { useNavigate } from "react-router-dom";

const BreedInfo = (props) => {
  const { breedName } = props;

  const [query, setQuery] = useState({
    breedName: "",
  });

  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();
  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  // let navigate = useNavigate();
  const onSubmit = async (token) => {
    const data = query;

    console.log(data);
    try {
      console.log(breedName);
      const res = await axios.get(
        `${apiHost}/api/info/breed/${breedName}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      // navigate("/journal");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <BreedInfoForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
  );
};
export default BreedInfo;
