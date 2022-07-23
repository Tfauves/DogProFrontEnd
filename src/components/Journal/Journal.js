import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import JournalEntry from "./JournalEntry";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Journal = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [journal, setJournal] = useState({
    id: params.journalId,
  });

  useEffect(() => {
    const getJournal = async () => {
      const res = await axios.get(`${apiHost}/api/journal/${journal.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setJournal(res.data);
      setLoading(false);
    };
    setLoading(true);
    getJournal();
  }, []);
  const displayEntires = () => {
    return journal.entry.map(({ type: { id, type }, activity, timestamp }) => (
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
    ));
  };
  const displayJournal = () => {
    return (
      <div style={{ marginTop: "3em" }}>
        <h1>Journal Home</h1>
        {displayEntires()}
        <div style={{ marginTop: "6em" }}>
          <h1>Add A New Entry</h1>
          <JournalEntry query={journal.entry} journalId={journal.id} />
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {loading ? <Spinner /> : displayJournal()}
    </div>
  );
};

export default Journal;
