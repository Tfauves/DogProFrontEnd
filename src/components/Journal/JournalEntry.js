import React, { useState, useContext } from "react";
import axios from "axios";
import JournalForm from "./JournalForm";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "./../../config";

const JournalEntry = (props) => {
  const { journalId } = props;

  const [query, setQuery] = useState({
    type: "",
    activity: "",
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
    data.type = { id: data.type };
    data.entry = { activity: data.activity };
    console.log(data);
    try {
      console.log(journalId);
      const res = await axios.post(`${apiHost}/api/entry/${journalId}`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      props.onAdd(res.data);
    } catch (err) {
      alert(err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <JournalForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
  );
};
export default JournalEntry;
