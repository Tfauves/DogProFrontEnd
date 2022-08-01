import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import JournalEntry from "./JournalEntry";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TypeSelect from "../EntryDropdown/TypeSelect";
import AdvButton from "../common/AdvButton";
import DeleteEntry from "./DeleteEntry";

const DisplayEntries = (props) => {
  return props.journal.entry.map(
    ({ type: { id, type }, activity, timestamp }) => (
      <div>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {/* <ListGroup.Item>{id}</ListGroup.Item> */}
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
