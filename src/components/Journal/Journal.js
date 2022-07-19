import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import { Fragment } from "react/cjs/react.production.min";
import JournalEntry from "./JournalEntry";
import Entries from "./Entries";
import EntryType from "./EntryType";

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

  // todo: map through entries
  const displayEntires = () => {
    return journal.entry.map(({ type: { id, type }, activity, timestamp }) => (
      <div>
        <p>{id}</p>
        <p>{type}</p>
        <p>{timestamp}</p>
        <p>{activity}</p>
      </div>

      // <Entries entry={entry} key={count++} />
    ));
  };
  const displayJournal = () => {
    // console.log((journal.entry = { activity: journal.entry[0] }));
    console.log(journal.entry[0].type.type);
    console.log(journal.entry[0].type.id);

    return (
      <div style={{ marginTop: "3em" }}>
        <h1>Journal Home</h1>
        {displayEntires()}
        {/* <p> dog journal Id {journal.id}</p> */}
        {/* <p> Type: {journal.entry[0].type.type}</p>
        <p> Activity: {journal.entry[0].activity}</p>
        <p> Time: {journal.entry[0].timestamp}</p>

        <p> Type: {journal.entry[1].type.type}</p>
        <p> Activity: {journal.entry[1].activity}</p>
        <p> Time: {journal.entry[1].timestamp}</p>

        <p> Type: {journal.entry[2].type.type}</p>
        <p> Activity: {journal.entry[2].activity}</p>
        <p> Time: {journal.entry[2].timestamp}</p> */}
        <div style={{ marginTop: "6em" }}>
          <h1>Add A New Entry</h1>
          <JournalEntry journalId={journal.id} />
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
