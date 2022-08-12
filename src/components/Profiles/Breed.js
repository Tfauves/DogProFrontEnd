import React from "react";
import { Card } from "react-bootstrap";
import BorderCardAdv from "./../common/BorderCardAdv";

const Breed = (props) => {
  const { id, name, bred_for, breed_group, life_span, temperament } =
    props.breed;

  return <BorderCardAdv>{props.breed.name}</BorderCardAdv>;
};

export default Breed;
