import React from "react";
import image from "../../assets/landingPage.jpg";

const Home = () => {
  
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Home</h1>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "50vh",
          display: "flex",
          flexDirection: "row",
          margin: "1rem 0rem",
          padding: "8px",
          maxWidth: "900px",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default Home;
