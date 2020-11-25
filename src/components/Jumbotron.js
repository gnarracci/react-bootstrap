import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import imac from "../assets/imac.jpg";

const Styles = styled.div`
  .jumbotron {
    background: url(${imac}) no-repeat fixed bottom;
    background-size: cover;
    color: #000;
    height: 250px;
    position: relative;
    z-index: -2;

    .overlay {
      background-colr: #000;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay">
        <Container>
          <h1>Welcome</h1>
          <p>Learn to code</p>
        </Container>
      </div>
    </Jumbo>
  </Styles>
);
