import React from "react";
import BorderCard from "../common/BorderCard";
import AdvButton from "../common/AdvButton";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Dog = (props) => {
  const navigate = useNavigate();
  const { id, name, avatar, age, weight, sex, breed, deleted, journal } =
    props.dog;
  const onClick = (props) => {
    navigate(`/journal/${journal.id}`);
  };

  // return (
  //   <Card style={{ width: "18rem" }}>
  //     <Card.Body>
  //       <Card.Title>{name}</Card.Title>
  //       <AdvButton
  //         onClick={() => onClick(props.dog.journal.id)}
  //         style={{
  //           width: "auto",
  //           color: "#F1F1F1",
  //           backgroundColor: "#303030",
  //         }}
  //       >
  //         View Journal
  //       </AdvButton>
  //       <AdvButton
  //         onClick={() => props.onSelect(props.dog.id)}
  //         style={{
  //           width: "auto",
  //           color: "#F1F1F1",
  //           backgroundColor: "#303030",
  //         }}
  //       >
  //         View Profile
  //       </AdvButton>
  //     </Card.Body>
  //   </Card>
  // );

  return (
    <BorderCard>
      <h2>{name}</h2>
      <AdvButton
        onClick={() => onClick(props.dog.journal.id)}
        style={{
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#303030",
        }}
      >
        View Journal
      </AdvButton>
      <AdvButton
        onClick={() => props.onSelect(props.dog.id)}
        style={{
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#303030",
        }}
      >
        View Profile
      </AdvButton>
    </BorderCard>
  );
};

export default Dog;
