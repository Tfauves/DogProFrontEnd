import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";
import { Fragment } from "react/cjs/react.production.min";
import image from "../../assets/cardImg.jpg";

const DogProfile = (props) => {
  const params = useParams();
  const [dogProfile, setDogProfile] = useState({
    id: params.dogId,
  });

  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";

  useEffect(() => {
    const getDog = async () => {
      const res = await axios.get(`${host}/api/dogs/all`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setDogProfile(res.data);
      setLoading(false);
    };
    setLoading(true);
    getDog();
  }, []);

  const displayProfile = () => {
    return (
      <Fragment>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            height: "27vh",
            display: "flex",
            flexDirection: "row",
            margin: "1rem 0rem",
            marginTop: "3rem",
            padding: "8px",
            maxWidth: "900px",
            width: "100%",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              flex: 1,
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ borderRadius: "100px" }}
              src={dogProfile.avatar.url}
              width={200}
              height={250}
              alt="placeholder img"
            />
          </div>
          ,
          <div
            style={{
              fontFamily: "Bebas Neue, cursive",
              flex: 2,
              flexDirection: "column",
              color: "#303030",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>{dogProfile.name.toUpperCase()}</h1>
          </div>
        </div>
      </Fragment>
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
      {loading ? <Spinner /> : displayProfile()}
    </div>
  );
};
export default DogProfile;
