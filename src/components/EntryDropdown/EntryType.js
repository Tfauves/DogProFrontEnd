import React from "react";
const EntryType = (props) => {
  const { id, type } = props.type;

  return (
    <div style={{ display: "flex", backgroundColor: "red" }}>
      enter {id} for type: {type}
    </div>
  );
};

export default EntryType;
