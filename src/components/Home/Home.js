import React from "react";
import splashImage from "../../assets/splash.jpg";
import Container from "../common/Container";
import Splash from "../common/Splash";


const Home = () => {
  return (
    <Container>
      <Splash image={splashImage} style={{ color: "F1F1F1" }}>
        <h1 style={{textAlign: "center"}}>Lorem Ipsum</h1>
        <h2 style={{textAlign: "center"}}>do eiusmod tempor incididunt ut labore </h2>
        </Splash>
    </Container>
  );
};

export default Home;
