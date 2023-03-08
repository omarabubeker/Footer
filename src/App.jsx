import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import logo from './assets/react.svg';
import Footer from './Footer';

const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
  max-width: 2rem;
  grid-area: logo;
`;

const StyledImg = styled.img `
  width: 100%;
  `;

const MainContainer = styled.div`
  grid-area: main;
`;


const GridContainer = styled.div`
display: grid;
grid-template-rows: 7rem repeat(3, 1fr) 10rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"logo top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer";
min-height: 100vh;
`;


/* const StyledFooter = styled.footer`
grid-area: footer;
display: flex;
`;
 */


function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer><StyledImg src={logo} alt="Logo" /></LogoContainer>
        <Navbar />

        <MainContainer>
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/portfolio">
            <p>Portfolio</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
        <h1>Hello</h1>
        </MainContainer>
        <Footer>
        </Footer>
      </GridContainer>
    </Router>
  );
}


export default App;