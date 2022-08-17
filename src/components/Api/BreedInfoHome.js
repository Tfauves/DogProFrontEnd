import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import ApiFormHandler from "./ApiFormHandler";
import dnaImg from "../../assets/dna.jpg";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${dnaImg})`,
            height: "25vh",
            width: "100%",
            marginTop: "-32em",
            justifyContent: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            width: "75%",
            height: "20em",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ApiFormHandler query={info} breedName={breedName} />
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {loading ? <Spinner /> : displayForm()}
    </div>
  );
};

export default ApiInfo;
