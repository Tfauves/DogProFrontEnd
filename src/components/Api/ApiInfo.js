import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import ApiFormHandler from "./ApiFormHandler";
import dnaImg from "../../assets/dna.jpg";
import Splash from "../common/Splash";

const ApiInfo = (props) => {
  const params = useParams();
  const { breedName } = params;
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.get(`${apiHost}/api/info/breed/${breedName}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setInfo(res.data);
      setLoading(false);
    };
    setLoading(true);
    getInfo();
  }, []);

  const displayForm = () => {
    return (
      <div style={{ marginTop: "3em" }}>
        <ApiFormHandler query={info} breedName={breedName} />
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
      <Splash image={dnaImg} style={{ height: "25vh", width: "100%" }} />
      {loading ? <Spinner /> : displayForm()}
    </div>
  );
};

export default ApiInfo;
