import React, { useState } from "react";

import styled from "styled-components";

import NavBarIcon from "../assets/navbarIcon.svg";

const Container = styled.nav`
  background-color: #de0c4b;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  position: absolute;
`;

const Logo = styled.span`
  padding-left: 16px;
  font-family: "Open Sans";
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <Logo>Loans Control</Logo>
    </Container>
  );
};

export default Header;
