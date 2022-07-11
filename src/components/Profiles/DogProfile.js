import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";
import { Fragment } from "react/cjs/react.production.min";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { apiHost } from "../../config";
import AdvButton from "../common/AdvButton";
import { useNavigate } from "react-router-dom";

const DogProfile = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [dogProfile, setDogProfile] = useState({
    id: params.dogId,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getDog = async () => {
      const res = await axios.get(`${apiHost}/api/dog/${dogProfile.id}`, {
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

  const onClick = (journalId) => {
    navigate(`/journal/${journalId}`);
  };

  const displayProfile = () => {
    return (
      <Fragment>
        {/* <div
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
              style={{ borderRadius: "3px", padding: "1em" }}
              src={dogProfile.avatar.url}
              width={300}
              height={250}
              alt="placeholder img"
            />
          </div>
          , */}
        {/* <div
            style={{
              fontFamily: "Bebas Neue, cursive",
              flex: 2,
              flexDirection: "column",
              color: "#303030",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>Name: {dogProfile.name.toUpperCase()}</h1>
            <h2>{dogProfile.breed.breedName}</h2>
            <h2>{dogProfile.breed.breedGroup}</h2>
            <h2>Age: {dogProfile.age}</h2>
            <h2>Sex: {dogProfile.sex}</h2>
            <h2>Weight: {dogProfile.weight + " lbs"}</h2>
          </div> */}
        {/* </div> */}

        <Card style={{ width: "50rem", paddingTop: "3rem" }}>
          <Card.Img variant="top" src={dogProfile.avatar.url} />
          <Card.Body>
            <Card.Title>{dogProfile.name.toUpperCase()}</Card.Title>
            <Card.Text>Latest Journal Entry</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{dogProfile.breed.breedName}</ListGroupItem>
            <ListGroupItem>{dogProfile.breed.breedGroup}</ListGroupItem>
            <ListGroupItem>Age: {dogProfile.age}</ListGroupItem>
            <ListGroupItem>Sex: {dogProfile.sex}</ListGroupItem>
            <ListGroupItem>Weight: {dogProfile.weight} lbs</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <AdvButton
              onClick={onClick}
              style={{
                width: "auto",
                color: "#F1F1F1",
                backgroundColor: "gray",
              }}
            >
              Journal
            </AdvButton>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
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
