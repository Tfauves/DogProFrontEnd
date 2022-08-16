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
      <div
        style={{
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "-3em",
            backgroundColor: "green",
            height: "5em",
            justifyContent: "center",
          }}
        >
          <h1
            style={{ marginBottom: "1em", fontFamily: "Poppins, sans-serif" }}
          >
            Journal
          </h1>
        </div>
        <div
          style={{
            backgroundColor: "orange",
            width: "75%",
            height: "20em",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Add A New Entry
          </h1>
          <div
            style={{
              backgroundColor: "pink",
              height: "10em",
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <JournalEntry
              query={journal.entry}
              journalId={journalId}
              onAdd={updateJournal}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            minWidth: "100px",
            justifyContent: "center",
            backgroundColor: "blue",
            width: "75%",
            height: "20em",
            marginTop: "3em",
          }}
        >
          <DisplayEntries journal={journal} />
        </div>
      </div>
      // <div style={{ display: "flex" }}>
      //   <div style={{ marginTop: "3em" }}>
      //     <h1>Journal Home</h1>
      //     <DisplayEntries journal={journal} />
      //   </div>
      //   <div style={{ marginTop: "6em" }}>
      //     <h1>Add A New Entry</h1>
      //     <h3>Select a Entry Type</h3>
      //     <JournalEntry
      //       query={journal.entry}
      //       journalId={journalId}
      //       onAdd={updateJournal}
      //     />
      //   </div>
      // </div>
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
