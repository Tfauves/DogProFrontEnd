import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const BreedInfo = (props) => {
  console.log(props.info);
  return props.info.map(({ id, name, bred_for }) => (
    <div key={id}>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <p> {id}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>{bred_for}</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  ));
};
export default BreedInfo;
