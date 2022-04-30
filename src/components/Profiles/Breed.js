import React from "react";
import { Card } from "react-bootstrap";

const Breed = (props) => {
  const { id, breedName, breedGroup } = props.breed;

  return (
    <div>
      {props.children}
    </div>
  
  );
};

export default Breed;
