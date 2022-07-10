import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JournalForm from "./JournalForm";
import { AuthContext } from "../Providers/AuthProvider";
import { type } from "@testing-library/user-event/dist/type";

const JournalEntry = () => {
  const host = "http://localhost:8080";

  let navigate = useNavigate();
  const [activity, setActivity] = useState({
    type: "",
  });
  const [entry, setEntry] = useState({});

  const [auth] = useContext(AuthContext);

  const updateActivity = (field, value) => {
    setActivity({
      ...activity,
      [field]: value,
    });
  };

  const updateEntry = (field, value) => {
    setEntry({
      ...entry,
      [field]: value,
    });
  };

  const onSubmit = async (token) => {
    const data = activity;
    data.type = activity.type;
    data.entry = { type };
    console.log(data);
    try {
      const res = await axios.get(`${host}/api/entryType`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      navigate("/profile");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <JournalForm
      activity={activity}
      entry={entry}
      updateForm={updateActivity}
      updateEntryForm={setEntry}
      handleSubmit={onSubmit}
    />
  );
};
export default JournalEntry;
