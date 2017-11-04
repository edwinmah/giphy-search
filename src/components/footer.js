import React from 'react';
import github from '../assets/github.svg';

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="container">
        <div className="row">
          <a href="">
            <img src={github} className="github-logo" alt="github logo" />
            <p>View on GitHub</p>
          </a>
        </div>
      </div>
    </footer>
  )
} 