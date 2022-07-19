import React from "react";
import BorderCard from "../common/BorderCard";

const EntryType = (props) => {
  const { type } = props.entry;
  return (
    <BorderCard>
      <h1>Type:{type}</h1>
    </BorderCard>
  );
};
export default EntryType;
