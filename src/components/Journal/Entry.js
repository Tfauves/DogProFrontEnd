import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Type from "./Type";

const DisplayEntries = (props) => {
  //   return props.journal.entry.map((entry) => (
  //     <Type
  //       id={entry.type.id}
  //       key={entry.timestamp}
  //       activity={entry.activity}
  //       timestamp={entry.timestamp}
  //     />
  //   ));
  return props.journal.entry.map(
    ({ type: { type }, id, activity, timestamp }) => (
      <div key={id}>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{type}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Time: {timestamp}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Activity: {activity}</p>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    )
  );
};
export default DisplayEntries;
