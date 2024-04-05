import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';



const Navbar = ({ username }) => {
  return (
    <NavBarStyled>
      <LeftSide />
      <RightSide username={username} />
    </NavBarStyled>
  );
};

export default Navbar;

const NavBarStyled = styled.div`
  width: 100%;
  max-width: 1200px; 
  background-color: #e0e0e0; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 0.5rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;