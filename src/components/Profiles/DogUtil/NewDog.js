import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NewDogForm from "./NewDogForm";
import axios from "axios";
import loginbackground from "../../../assets/loginbackground.jpg";
import { AuthContext } from "../../Providers/AuthProvider";

const NewDog = () => {
  const host = "http://localhost:8080";

  let navigate = useNavigate();

  const [query, setQuery] = useState({
    name: "",
    age: "",
    weight: "",
    sex: "",
    avatar: "",
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
    console.log(data);
    data.breed = {
      breedName: data.breedName,
      breedGroup: data.breedGroup,
    };
    data.journal = {};
    data.avatar = { url: data.avatar };
    console.log("after");
    console.log(data);
    try {
      const res = await axios.post(`${host}/api/dog/new`, data, {
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
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          marginTop: "2em",
          paddingBottom: ".5em",
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "8px",
        }}
      >
        New Dog
      </h1>

      <NewDogForm query={query} updateForm={updateForm} onSubmit={onSubmit} />
    </div>
  );
};
export default NewDog;
