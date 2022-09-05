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
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
        }}
      >
        <img
          style={{ borderRadius: "100px", marginTop: ".5em" }}
          src={
            avatar.url
              ? avatar.url
              : "https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg"
          }
          width={150}
          height={150}
          alt="placeholder img"
        />
        <h2 style={{ justifyContent: "center", alignItems: "center" }}>
          {name}
        </h2>
      </div>
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
