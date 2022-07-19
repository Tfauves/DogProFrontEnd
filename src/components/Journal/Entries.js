import React from "react";
import BorderCard from "../common/BorderCard";

const Entries = (props) => {
  const { type, activity, timestamp } = props.entry;
  return (
    <BorderCard>
      <h1>Type: {type}</h1>
      <h1>Activity: {activity}</h1>
      <h1>Time: {timestamp}</h1>
    </BorderCard>
  );
};
export default Entries;
