import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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
      <div
        // style={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   flexDirection: "row",
        //   justifyContent: "center",
        //   height: "20vh",
        // }}
        key={id}
        // type select maybe goes here to map the types array?
      >
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
