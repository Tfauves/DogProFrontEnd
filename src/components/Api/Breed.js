import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Breed = (props) => {
  const { id, name, bred_for, breed_group, life_span, temperament } =
    props.breed;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>Breed Name: {name}</ListGroup.Item>
          <ListGroup.Item>Breed Group: {breed_group}</ListGroup.Item>
          <ListGroup.Item>Bred For: {bred_for}</ListGroup.Item>
          <ListGroup.Item>Breed Traits: {temperament}</ListGroup.Item>
          <ListGroup.Item>Avg Life Span: {life_span}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Breed;
