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
  const [dogProfile, setDogProfile, journalId] = useState({
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
    if (!auth.token) {
      return;
    }
    getDog();
  }, [auth]);

  const onClick = (journalId) => {
    navigate(`/journal/${dogProfile.journal.id}`);
  };

  const displayProfile = () => {
    return (
      <Fragment>
        <Card style={{ width: "50rem", paddingTop: "3rem" }}>
          <Card.Img variant="top" src={dogProfile.avatar.url} />
          <Card.Body>
            <Card.Title>{dogProfile.name.toUpperCase()}</Card.Title>
            {/* <Card.Text>Latest Journal Entry</Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Breed Name: {dogProfile.breed.breedName}
            </ListGroupItem>
            <ListGroupItem>
              Breed Group: {dogProfile.breed.breedGroup}
            </ListGroupItem>
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
