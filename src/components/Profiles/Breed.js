import React from "react";
import { Card } from "react-bootstrap";

const Breed = (props) => {
  const { id, breedName, breedGroup } = props.breed;

  return (
    <Card.Text>
      <p>{breedName}</p>
      <p>{breedGroup} </p>
    </Card.Text>
  );
};

export default Breed;
