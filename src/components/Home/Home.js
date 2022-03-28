import React from "react";
import splashOverlay from "../../assets/splashOverlay.jpg";
import Container from "../common/Container";
import Splash from "../common/Splash";

const Home = () => {
  return (
    <Container>
      <Splash image={splashOverlay} style={{ color: "#f1f1f1" }}>
        <h1 style={{fontFamily: 'Bebas Neue, cursive',
        marginTop: "3em", 
        textAlign: "center", 
        fontSize: "5em", 
        textShadow: '0 0 6px #303030, 0 0 5px #303030' }}>For the love of Dog</h1>
        <h2 style={{fontFamily: 'Oswald, sans-serif', 
        marginTop: "1em", 
        textAlign: "center", 
        textShadow: '0 0 6px #303030, 0 0 5px #303030' }}>Balance. Friendship. Loyalty</h2>
      </Splash>
    </Container>
  );
};

export default Home;
