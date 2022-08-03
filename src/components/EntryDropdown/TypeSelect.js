import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import axios from "axios";
import EntryType from "./EntryType";

const TypeSelect = () => {
  const [type, setType] = useState({});
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const getType = async () => {
      try {
        const res = await axios.get(`${apiHost}/api/entryType`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        console.log(res.data);
        setType(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    setLoading(true);
    getType();
  }, []);

  const displayTypes = () => {
    return type.map((type) => <EntryType type={type} key={type.id} />);
  };

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      {loading ? <p>Loading...</p> : displayTypes()}
    </div>
  );
};

export default TypeSelect;
