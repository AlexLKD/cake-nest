import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiCursorClick } from "react-icons/hi";
import { MdModeEditOutline } from 'react-icons/md';
import styled from 'styled-components';
import AddProductForm from '../pages/order/main/AddProductForm';

export default function AdminPanel() {
  const { isAdminMode, isPanelOpen, activeTab, togglePanel, switchTab } = useAdmin();

  const handleTogglePanel = () => {
    togglePanel();
    if (!isPanelOpen) {
      switchTab('add');
    }
  };

  if (!isAdminMode) return null;

  return (
    <div className={`admin-panel ${isPanelOpen ? 'open' : 'closed'}`}>
      <PanelStyle>
        <div className="tabs">
          <button onClick={handleTogglePanel}>
            {isPanelOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <button className={activeTab === 'add' ? 'active' : ''} onClick={() => switchTab('add')}>
            <AiOutlinePlus /> Ajouter un produit
          </button>
          <button className={activeTab === 'edit' ? 'active' : ''} onClick={() => switchTab('edit')}>
            <MdModeEditOutline /> Modifier un produit
          </button>
        </div>
        <PanelContent className={isPanelOpen ? 'open' : 'closed'} >
          {activeTab === 'add' && <AddProductForm isPanelOpen={isPanelOpen} />}
          {activeTab === 'edit' && <div>Modifier un produit <HiCursorClick/></div>}
        </PanelContent>
      </PanelStyle>
    </div>
  );
};

const PanelContent = styled.div`
  transition: height 0.3s ease;
  background-color: white; 
  width: 100%;
  overflow: hidden;
  &.open {
    height: 30vh;
    display: block;
  }
  &.closed {
    height: 0;
    display: none;
  }
`;

const PanelStyle = styled.div`

  .tabs{
    margin-left: 2rem;
    background-color: transparent;
  }
  
`