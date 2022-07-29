import React from "react";
import BorderCard from "../common/BorderCard";
import AdvButton from "../common/AdvButton";
import { useNavigate } from "react-router-dom";
// todo: need to send journal id over with the quick entry button
const Dog = (props) => {
  const navigate = useNavigate();
  const { id, name, avatar, age, weight, sex, breed, deleted, journal } =
    props.dog;
  const onClick = (props) => {
    navigate(`/journalEntry`);
  };

  return (
    <BorderCard>
      <h2>Name: {name}</h2>
      <AdvButton
        onClick={() => onClick()}
        style={{
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#303030",
        }}
      >
        Quick Entry
      </AdvButton>
      <AdvButton
        onClick={() => props.onSelect(props.dog.id)}
        style={{
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#303030",
        }}
      >
        View Profile
      </AdvButton>
    </BorderCard>
  );
};

export default Dog;
