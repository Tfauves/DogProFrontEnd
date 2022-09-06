import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import AdvButton from "../common/AdvButton";

const DeleteEntry = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [entry, setEntryId] = useState({
    id: params.entryId,
  });

  useEffect(() => {
    const deleteEntry = async () => {
      const res = await axios.delete(`${apiHost}/api/entry/${entry.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setEntryId(res.data);
      setLoading(false);
    };
    deleteEntry();
  }, []);

  const deleteOnClick = (entryId) => {
    const deleteEntry = async () => {
      const res = await axios.delete(`${apiHost}/api/entry/${entry.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setEntryId(res.data);
      setLoading(false);
    };
    deleteEntry();
  };

  return <AdvButton onclick={deleteOnClick}>delete entry</AdvButton>;
};

export default DeleteEntry;
