import React from "react";
import splashImage from "../../assets/splash.jpg";
// import Container from "../common/Container";
import Splash from "../common/Splash";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    // <Container>
    //   <Splash image={splashImage} style={{ color: "F1F1F1" }}>
    //     <h1 style={{}}>Lorem Ipsum</h1>
    //     <h2 style={{}}>do eiusmod tempor incididunt ut labore </h2>

    //     </Splash>
    // </Container>

    <Container fluid="xlg">
      <Row>
        <Splash image={splashImage} style={{ color: "F1F1F1" }}>
          <h1 style={{}}>Lorem Ipsum</h1>
          <h2 style={{}}>do eiusmod tempor incididunt ut labore </h2>
        </Splash>
      </Row>
    </Container>
  );
};

export default Home;
