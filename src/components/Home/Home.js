import React from "react";
import splashOverlay from "../../assets/splashOverlay.jpg";
import Container from "../common/Container";
import Splash from "../common/Splash";

const Home = (props) => {
  return (
    <Splash
      image={splashOverlay}
      style={{ color: "#303030", backgroundPosition: "center" }}
    >
      <Container>
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            marginTop: "3em",
            textAlign: "center",
            fontSize: "5em",
            letterSpacing: "13px",
            textShadow: "0 0 6px #f1f1f1, 0 0 5px #f1f1f1",
          }}
        >
          For the love of Dog
        </h1>
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "4px",
            marginTop: "1em",
            textAlign: "center",
            textShadow: "0 0 6px #f1f1f1, 0 0 5px #f1f1f1",
          }}
        >
          Balance <span>&#183;</span> Friendship <span>&#183;</span> Loyalty
        </h2>
      </Container>
    </Splash>
  );
};

export default Home;
