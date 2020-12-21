import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 94vh;
  left: 0;
  background-color: #e5e5e5;
  border-right: 1px solid #ebeff2;
  min-width: 236px;
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
  padding-left: 5px;
`;

const NavItemText = styled.span`
  color: #000000;
  font-family: "Open Sans";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: bold; 
`;

const Sidebar = () => {
  return (
    <Container>
      <NavItems>
        <NavItem>
          <NavItemText>Home</NavItemText>
        </NavItem>
      </NavItems>
    </Container>
  );
};

export default Sidebar;
