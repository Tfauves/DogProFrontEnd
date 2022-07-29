import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import BreedInfo from "./BreedInfo";

const GetBreedInfo = (props) => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [auth] = useContext(AuthContext);
  const [breedInfo, setBreedInfo] = useState({
    id: params.breedName,
  });

  useEffect(() => {
    const getBreedInfo = async () => {
      const res = await axios.get(`${apiHost}/api/info/breed/${breedInfo.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setBreedInfo(res.data);
      setLoading(false);
    };
    setLoading(true);
    getBreedInfo();
  }, []);

  const displayBreedInfo = () => {
    return (
      <div style={{ marginTop: "3em" }}>
        <h1>Breed Info</h1>
        <BreedInfo query={params.breedName} journalId={breedInfo.id} />
        <div style={{ marginTop: "6em" }}></div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {loading ? <Spinner /> : displayBreedInfo()}
    </div>
  );
};
export default GetBreedInfo;
