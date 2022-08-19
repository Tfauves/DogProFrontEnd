import React, { useState } from "react";

const Button = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type={props.type || "submit"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...styles.button,
        ...props.style,
        transition: "all ease-in-out .5s",
        opacity: hover ? "100%" : "85%",
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? <p>Loading...</p> : props.children}
    </button>
  );
};

const styles = {
  button: {
    fontFamily: "Poppins, sans-serif",
    marginTop: "10px",
    width: "auto",
    backgroundColor: "#0a55c5",
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold",
  },
};

export default Button;
