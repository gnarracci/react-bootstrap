import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import boatimage from '../assets/boat.jpg';

const Styles = styled.div`

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
)


