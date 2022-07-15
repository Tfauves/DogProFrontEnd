import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JournalForm from "./JournalForm";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "./../../config";

const JournalEntry = (props) => {
  let navigate = useNavigate();
  const { journalId } = props;

  const [query, setQuery] = useState({
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
      // todo: not navigating
      navigate("/journal");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return <JournalForm updateForm={updateForm} onSubmit={onSubmit} />;
};
export default JournalEntry;
