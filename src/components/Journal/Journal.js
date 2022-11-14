import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import JournalEntry from "./JournalEntry";
import DisplayEntries from "./Entry";
import bannerImg from "../../assets/journalBanner.jpg";
import Splash from "./../common/Splash";
import DeleteEntry from "./DeleteEntry";

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
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Splash
          image={bannerImg}
          style={{ marginTop: "-18em", height: "25vh", width: "100%" }}
        />
        <div
          style={{
            width: "75%",
            height: "20em",
            justifyContent: "center",
            alignItems: "center",
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
            width: "75%",
            height: "20em",
            marginTop: "3em",
          }}
        >
          <DisplayEntries journal={journal} />
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
