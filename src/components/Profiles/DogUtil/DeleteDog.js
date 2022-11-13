import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiHost } from "../../../config";
import { AuthContext } from "../../Providers/AuthProvider";

const DeleteDog = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [dogProfile, setDogProfile] = useState({
    id: params.dogId,
  });

  useEffect(() => {
    const deleteDog = async () => {
      const res = await axios.delete(`${apiHost}/api/dog/${dogProfile.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setDogProfile(res.data);
      setLoading(false);
    };
    deleteDog();
  }, []);

  return <h1>Delete Dog</h1>;
};

export default DeleteDog;
