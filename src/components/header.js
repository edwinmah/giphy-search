import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';
import topography from '../assets/topography.svg';

const AppHeader = styled.header`
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: #fff;
  background-color: #222222;
  background-image: url(${topography});
`;

const AppTitle = styled.h1`
  font-weight: 200;
  letter-spacing: 0.15rem;
`;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 800ms linear;
  height: 5rem;
`;

export default function Header() {
  return (
    <AppHeader className="App-header">
      <div className="container">
        <div className="row">
          <AppLogo
            src={logo}
            className="App-logo"
            alt="logo" />
          <AppTitle className="App-title">
            Find Your Giphy!
          </AppTitle>
        </div>
      </div>
    </AppHeader>
  )
} 