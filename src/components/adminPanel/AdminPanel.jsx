import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import styled from 'styled-components';

const AdminPanel = () => {
  const { isAdminMode, isPanelOpen, activeTab, togglePanel, switchTab } = useAdmin();
  const [panelHeight, setPanelHeight] = useState(0);

  const handleTogglePanel = () => {
    if (panelHeight === 0) {
      setPanelHeight(400);
    } else {
      setPanelHeight(0);
    }
    togglePanel();
  };

  if (!isAdminMode) return null;

  return (
    <div className={`admin-panel ${isPanelOpen ? 'open' : 'collapsed'}`}>
      <PanelStyle>
        <div className="tabs">
          <button onClick={handleTogglePanel}>
            {isPanelOpen ? <FiChevronUp /> : <FiChevronDown /> }
          </button>
          <button className={activeTab === 'add' ? 'active' : ''} onClick={() => switchTab('add')}>
            <AiOutlinePlus /> Ajouter un produit
          </button>
          <button className={activeTab === 'edit' ? 'active' : ''} onClick={() => switchTab('edit')}>
            <MdModeEditOutline /> Modifier un produit
          </button>
        </div>
        <PanelContent style={{ height: panelHeight }}>
        </PanelContent>
      </PanelStyle>
    </div>
  );
};

export default AdminPanel;

const PanelContent = styled.div`
  transition: height 0.3s ease;
  background-color: grey; 
  width: 100%;
`;

const PanelStyle = styled.div`
  .tabs{
    margin-left: 2rem;
    background-color: transparent !important;
  }
`