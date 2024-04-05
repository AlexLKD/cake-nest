import React from 'react';
import styled from "styled-components"
import Menu from './Menu';
import { theme } from "../../../theme"


export default function MainContent() {
    return(
        <MainContentStyled>
        <Menu />
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  background: ${theme.colors.background_white};
  margin-bottom: 1rem;
  padding: 2rem;
  box-shadow: inset 0px 4px 17px 0px rgba(0,0,0,0.73);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  flex-grow: 1; 
`