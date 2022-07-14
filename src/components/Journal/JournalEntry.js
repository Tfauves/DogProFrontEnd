import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JournalForm from "./JournalForm";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "./../../config";
// import JournalEntryForm from "./JournalEntryForm";

const JournalEntry = () => {
  let navigate = useNavigate();

  const [query, setQuery] = useState({
    entry: "",
  });

  const [auth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (token) => {
    const data = query;
    data.entry = { type: data.entry.type, activity: data.entry.activity };
    try {
      const res = await axios.post(`${apiHost}/api/entry`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      navigate("/journal");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <JournalForm
      // activity={}
      // entry={}
      updateForm={updateForm}
      onSubmit={onSubmit}
    />
  );
};
export default JournalEntry;
