import React from "react";
import Breed from "./Breed";
import BorderCard from "../common/BorderCard";
import AdvButton from "../common/AdvButton";

const Dog = (props) => {
  const { id, name, age, weight, sex, breed, deleted } = props.dog;
  if (breed != null) {
    return (
      <BorderCard>
        <h2>Name: {name}</h2>
        {/* <p>Age: {age}</p>
        <p>Weight: {weight} lbs</p>
        <p>Sex: {sex}</p>
        <p>Breed: {breed.breedName}</p>
        <p>Breed Group: {breed.breedGroup}</p> */}
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
  }

  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>Name: {name}</h2>
      {/* <p>Age: {age}</p>
      <p>Weight: {weight} lbs</p>
      <p>Sex: {sex}</p> */}
    </BorderCard>
  );
};

export default Dog;
