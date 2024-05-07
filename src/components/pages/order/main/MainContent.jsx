import React from 'react';
import styled from "styled-components"
import Menu from './Menu';
import { theme } from "../../../../theme"
import AdminPanel from "../../../adminPanel/AdminPanel";


export default function MainContent() {
    return(
        <MainContentStyled>
        <Menu className="menu"/>
        <AdminPanel className="admin-panel"/>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  background: ${theme.colors.background_white};
  margin-bottom: 1rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  flex-grow: 1;
  overflow-y: auto;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  position: relative;

  .admin-panel{
    position: sticky;
    bottom: 0;
  }
`