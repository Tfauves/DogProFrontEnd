import React from "react";
import { Row, Col, Card } from "react-bootstrap";
// import BorderCard from '../common/BorderCard';

const Dog = (props) => {
  const { id, name, age, weight, sex } = props.dog;

  return (
    // <BorderCard onClick={() => props.onSelect(id)}>
    //   <h2>Name: {name}</h2>
    //   <p>Age: {age}</p>
    //   <p>Weight: {weight} lbs</p>
    //   <p>Sex: {sex}</p>
    // </BorderCard>

    <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/200" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <li>Age: {age}</li>
                <li>Weight: {weight} lbs</li>
                <li>Sex: {sex}</li>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
  );
};

export default Dog;
