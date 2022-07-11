import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import { Fragment } from "react/cjs/react.production.min";

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

  const displayJournal = () => {
    return (
      <Fragment>
        <h1>Journal</h1>
        <p>{journal.id}</p>
      </Fragment>
    );
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flex: "1",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     minHeight: "100vh",
    //   }}
    // >

    //   {/* {loading ? <Spinner /> : displayJournal()} */}
    // </div>
    displayJournal()
  );
};

export default Journal;
