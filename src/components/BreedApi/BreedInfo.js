import React, { useState, useContext } from "react";
import axios from "axios";
import BreedInfoForm from "./BreedInfoForm";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "./../../config";
import { useNavigate } from "react-router-dom";
import BreedInfoObj from "./BreedInfoObj";

const BreedInfo = (props) => {
  const { breedName } = props;
  const [infos, setInfos] = useState({});

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
      console.log(res.data[0].name);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  // const displayInfos = () => {
  //   return infos.map((dog) => <BreedInfoObj name={dog.name} key={dog.id} />);
  // };

  return (
    <div style={{ marginTop: "6em" }}>
      <h1 style={{ textAlign: "center" }}>Breed Info Finder</h1>
      <BreedInfoForm
        query={breedName}
        updateForm={updateForm}
        onSubmit={onSubmit}
      />
    </div>
  );
};
export default BreedInfo;
