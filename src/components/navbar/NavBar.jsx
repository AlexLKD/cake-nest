import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Navbar = ({ username }) => {

  const notifyAdminActive = () => {
    toast.success('Mode admin activé', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const notifyAdminNotActive = () => {
    toast.error('Mode admin désactivé', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const [isAdminMode, setIsAdminMode] = useState(false);

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);

    if (!isAdminMode) {
      notifyAdminActive();
    } else {
      notifyAdminNotActive();
    }
  };

  return (
    <NavBarStyled>
      <LeftSide />
      <div className="navbar">
        {isAdminMode ? (
          <button className='admin-btn' id="adminButton" onClick={toggleAdminMode}>DÉSACTIVER LE MODE ADMIN</button>
        ) : (
          <button className='admin-btn' id="adminButton" onClick={toggleAdminMode}>ACTIVER LE MODE ADMIN</button>
        )}
        <ToastContainer />
      </div>
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
  padding: 0.5rem 2rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .admin-btn {
    padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  }

  
`;