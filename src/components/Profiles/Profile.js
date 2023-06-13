import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import AdvButton from "../common/AdvButton";
import { Fragment } from "react/cjs/react.production.min";
import image from "../../assets/cardImg.jpg";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dogs from "./Dogs";

const Profile = (props) => {
  let navigate = useNavigate();
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.proId,
  });

  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const _fetchOwner = async () => {
      const res = await axios.get(`${apiHost}/api/profile/${owner.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      console.log(res.data);
      setOwner(res.data);
      setLoading(false);
    };
    setLoading(true);
    if (!auth.token) {
      return;
    }
    _fetchOwner();
  }, [auth]);

  const onClick = () => {
    navigate("/newDog");
  };

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
              src={
                owner.avatar.url
                  ? owner.avatar.url
                  : "https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg"
              }
              width={200}
              height={250}
              alt="placeholder img"
            />
          </div>
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
            <h1>{owner.name.toUpperCase()}</h1>
          </div>
        </div>

        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            marginTop: "1em",
            // textAlign: "center",
            textDecorationLine: "underline",
          }}
        >
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: "1em",
              fontSize: "3em",
              justifyContent: "center",
              alignItems: "center",
              letterSpacing: "13px",
              display: "flex",
              marginBottom: "1em",
              textDecorationLine: "underline",
            }}
          >
            Your Dogs
          </h1>
        </div>
        <div>
          <AdvButton
            onClick={onClick}
            style={{
              width: "auto",
              color: "#F1F1F1",
              backgroundColor: "#0a55c5",
            }}
          >
            <FontAwesomeIcon icon={faPaw} /> Add Dog
          </AdvButton>
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

export default Profile;
