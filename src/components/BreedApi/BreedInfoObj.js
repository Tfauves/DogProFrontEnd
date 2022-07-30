import React from "react";
import BorderCard from "../common/BorderCard";

const BreedInfoObj = (props) => {
  const { name, bred_for, breed_group, life_span, temperament } =
    props.breedObj;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{breed_group}</h2>
    </div>
  );
};
export default BreedInfoObj;
