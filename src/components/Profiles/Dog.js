import React from "react";
import BorderCard from "../common/BorderCard";
import AdvButton from "../common/AdvButton";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import BorderCardAdv from "./../common/BorderCardAdv";

const Dog = (props) => {
  const navigate = useNavigate();
  const { id, name, avatar, age, weight, sex, breed, deleted, journal } =
    props.dog;
  const onClick = (props) => {
    navigate(`/journal/${journal.id}`);
  };

  return (
    <BorderCardAdv
      style={{
        backgroundColor: "#f8f8f8",
        fontFamily: "specialElite, cursive",
      }}
    >
      <h2 style={{ marginTop: ".5em" }}>{name}</h2>
      <AdvButton
        onClick={() => props.onSelect(props.dog.id)}
        style={{
          marginTop: "2em",
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#0a55c5",
        }}
      >
        View Profile
      </AdvButton>
      <AdvButton
        onClick={() => onClick(props.dog.journal.id)}
        style={{
          marginTop: "2em",
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#0a55c5",
        }}
      >
        View Journal
      </AdvButton>
    </BorderCardAdv>
  );
};

export default Dog;
