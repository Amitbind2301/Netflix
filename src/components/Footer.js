import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 Netflix Clone. All rights reserved to AmitKrBind.</p>
    <Links>
      <a href="#">FAQ</a>
      <a href="#">Help Center</a>
      <a href="#">Terms of Use</a>
      <a href="#">Privacy</a>
    </Links>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: #000;
  color: #ccc;
  padding: 20px;
  text-align: center;
  margin-top: 50px;
`;

const Links = styled.div`
  margin-top: 10px;
  a {
    color: #ccc;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      color: #e50914;
    }
  }
`;

export default Footer;