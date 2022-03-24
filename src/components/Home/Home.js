import React from "react";
import splashImage from "../../assets/splash.jpg";
import Container from "../common/Container";
import Splash from "../common/Splash";


const Home = () => {
  return (
    <Container>
      <Splash image={splashImage} style={{ color: "F1F1F1" }}>
        <h1 style={{fontFamily: 'Poppins, sans-serif', marginTop: "3em", textAlign: "center" }}>For the love of Dog</h1>
        <h2 style={{fontFamily: 'Oswald, sans-serif', marginTop: "1em", textAlign: "center" }}>
          Balance. Friendship. Loyalty
        </h2>
      </Splash>
    </Container>
  );
};

export default Home;
