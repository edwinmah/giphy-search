import React from 'react';
import styled from 'styled-components';
import github from '../assets/github.svg';
import topography from '../assets/topography.svg';

const AppFooter = styled.header`
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: #fff;
  background-color: #222222;
  background-image: url(${topography});
`;

const FooterLink = styled.a`
  display: inline-block;
  padding: 1rem;
  color: #fff;

  &:hover,
  &:focus {
    color: #f7f7f9;
  }
`;

const FooterParagraph = styled.p`
  margin-bottom: 0;
`;

const GitHubLogo = styled.img`
  height: 4rem;
  margin-bottom: 2rem;
`;

export default function Footer() {
  return (
    <AppFooter className="App-footer">
      <div className="container">
        <div className="row">
          <FooterLink 
            href="https://github.com/edwinmah/giphy-search">
            <GitHubLogo
              src={github}
              className="github-logo"
              alt="github logo" />
            <FooterParagraph>View on GitHub</FooterParagraph>
          </FooterLink>
        </div>
      </div>
    </AppFooter>
  )
} 