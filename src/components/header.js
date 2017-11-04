import React from 'react';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="row">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Find Your Giphy!</h1>
        </div>
      </div>
    </header>
  )
} 