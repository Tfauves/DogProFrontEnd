import React from "react";
import { useNavigate } from "react-router-dom";
import BorderCard from "../common/BorderCard";
import AdvButton from "../common/AdvButton";

const Dog = (props) => {
  let navigate = useNavigate();
  const { id, name, age, weight, sex, breed, deleted } = props.dog;
  return (
    <BorderCard>
      <h2>Name: {name}</h2>
      <AdvButton
        onClick={() => props.onSelect(id)}
        style={{
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#303030",
        }}
      >
        Quick Entry
      </AdvButton>
      <AdvButton
        onClick={() => props.onSelect(id)}
        style={{
          width: "auto",
          color: "#F1F1F1",
          backgroundColor: "#303030",
        }}
      >
        View More
      </AdvButton>
    </BorderCard>
  );
};

export default Dog;
