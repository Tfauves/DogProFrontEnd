import React from "react";
import Breed from "./Breed";
import BorderCard from '../common/BorderCard';

const Dog = (props) => {
  const { id, name, age, weight, sex, breed, journal} = props.dog;
  if (breed != null) {
    return (
      <BorderCard onClick={() => props.onSelect(id)}>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Weight: {weight} lbs</p>
        <p>Sex: {sex}</p>
        <p>Breed: {breed.breedName}</p>
        <p>Breed Group: {breed.breedGroup}</p>
      </BorderCard>
    )
  }

  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Weight: {weight} lbs</p>
      <p>Sex: {sex}</p>
      

    </BorderCard>

  );
};

export default Dog;
