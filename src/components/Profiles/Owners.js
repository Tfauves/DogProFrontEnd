import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import AdvButton from "../common/AdvButton";
import image from "../../assets/cardImg.jpg";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dogs from "./Dogs";

const Owners = (props) => {
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
      <div
        style={{
          // backgroundColor: "red",
          width: "100%",
          height: "100vh",
          // display: "flex",
        }}
      >
        <div
          style={{
            // backgroundColor: "blue",
            width: "20vw",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              objectFit: "contain",
            }}
          >
            <img
              style={{
                marginTop: "3em",
                display: "flex",
              }}
              src={
                owner.avatar.url
                  ? owner.avatar.url
                  : "https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg"
              }
              width={200}
              height={250}
              alt="placeholder img"
            />
            <h1>{owner.name.toUpperCase()}</h1>
          </div>
        </div>

        <div
          style={{
            // backgroundColor: "green",
            width: "50%",
            height: "10vh",
            margin: "3em",
            marginTop: "-1em",
            justifyContent: "center",
            marginLeft: "6em",
          }}
        >
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: "1em",
              textAlign: "center",
              textDecorationLine: "underline",
              marginLeft: "6em",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                marginTop: "2em",
                fontSize: "3em",
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
        </div>
        <div
          style={{
            // backgroundColor: "orange",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            minWidth: "100px",
            justifyContent: "center",
            width: "75%",
            height: "20em",
            marginTop: "20em",
            marginLeft: "-48em",
          }}
        >
          <div style={{}}>
            <Dogs />
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
        </div>
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
      {loading ? <Spinner /> : displayProfile()}
    </div>
  );
};

export default Owners;
