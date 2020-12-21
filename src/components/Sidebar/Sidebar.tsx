import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";

const Container = styled.div`
  height: 100%;
  background-color: #e5e5e5;
  border-right: 1px solid #ebeff2;
  min-width: 236px;
  position: fixed;
`;

const Logo = styled.div`
  padding-left: 16px;
  font-family: "Open Sans";
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const NavItems = styled.div`
  margin: 20px 16px;
`;

const NavItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background-color: #5cb5fe;
  padding-left: 10px;
`;

const NavItemText = styled.span`
  color: #000000;
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: bold;
  margin-left: 10px;
`;

const Sidebar = () => {
  return (
    <Container>
      <Logo>Loans Control</Logo>
      <NavItems>
        <NavItem>
          <HomeIcon height={20} width={20} />
          <NavItemText> Home</NavItemText>
        </NavItem>
      </NavItems>
    </Container>
  );
};

export default Sidebar;
