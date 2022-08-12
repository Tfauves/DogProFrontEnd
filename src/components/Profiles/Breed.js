import React from "react";
import { Card } from "react-bootstrap";
import BorderCardAdv from "./../common/BorderCardAdv";

const Breed = (props) => {
  const { id, name, bred_for, breed_group, life_span, temperament } =
    props.breed;

  // return <BorderCardAdv>{props.breed.name}</BorderCardAdv>;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{breed_group}</Card.Subtitle>
        <Card.Text>Bred For: {bred_for}</Card.Text>
        <Card.Text>Avg. Lifespan: {life_span}</Card.Text>
        <Card.Text>Traits: {temperament}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Breed;
