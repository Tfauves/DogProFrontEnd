import React from "react";

const EntryType = (props) => {
  const { id, type } = props.type;

  return (
    <div>
      <p>
        enter {id} for type: {type}
      </p>
    </div>
  );
};

export default EntryType;
