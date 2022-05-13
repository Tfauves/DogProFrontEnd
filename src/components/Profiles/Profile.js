import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Spinner from "../faCommon/Spinner";
import AdvButton from "../common/AdvButton";
import { Fragment } from "react/cjs/react.production.min";
import image from "../../assets/cardImg.jpg";
import { Container } from "react-bootstrap";
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
  const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";

  useEffect(() => {
    const _fetchOwner = async () => {
      const res = await axios.get(`${host}/api/profile/${owner.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      console.log(res.data);
      setOwner(res.data);
      setLoading(false);
    };
    setLoading(true);
    _fetchOwner();
  }, []);

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
              src={owner.avatar.url}
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
            <h1>{owner.name.toUpperCase()}</h1>
          </div>
        </div>
        <Container fluid>
          <div>
            <h1
              style={{
                fontFamily: "Bebas Neue, cursive",
                marginTop: "1em",
                textAlign: "center",
                fontSize: "3em",
                letterSpacing: "13px",
                marginBottom: "1em",
                textDecorationLine: "underline",
              }}
            >
              Your Dogs
            </h1>
            <AdvButton
              onClick={onClick}
              style={{
                width: "auto",
                color: "#F1F1F1",
                backgroundColor: "gray",
              }}
            >
              <FontAwesomeIcon icon={faPaw} /> Add New Dog
            </AdvButton>
          </div>
        </Container>
        <Dogs />

        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <AdvButton
            style={{
              width: "auto",
              color: "#F1F1F1",
              backgroundColor: "#303030",
            }}
          >
            Delete Dog <FontAwesomeIcon icon={faPaw} />
          </AdvButton>
        </div> */}
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
