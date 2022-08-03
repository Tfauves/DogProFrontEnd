import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import JournalEntry from "./JournalEntry";
import DisplayEntries from "./Entry";

const Journal = (props) => {
  const params = useParams();
  const { journalId } = params;
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [journal, setJournal] = useState([]);

  const updateJournal = (newJournal) => {
    setJournal({
      ...journal,
      entry: [...journal.entry, newJournal],
    });
  };

  useEffect(() => {
    const getJournal = async () => {
      const res = await axios.get(`${apiHost}/api/journal/${journalId}`, {
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

  const displayJournal = () => {
    return (
      <div style={{ marginTop: "3em" }}>
        <h1>Journal Home</h1>
        <DisplayEntries journal={journal} />
        <div style={{ marginTop: "6em" }}>
          <h1>Add A New Entry</h1>
          <h3>Select a Entry Type</h3>
          <JournalEntry
            query={journal.entry}
            journalId={journalId}
            onAdd={updateJournal}
          />
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
