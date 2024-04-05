import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

const AdminPanel = () => {
  const { isAdminMode, isPanelOpen, activeTab, togglePanel, switchTab } = useAdmin();

  if (!isAdminMode) return null;

  return (
    <div className={`admin-panel ${isPanelOpen ? 'open' : 'collapsed'}`}>
      <div className="tabs">
        <button onClick={() => togglePanel()}>
          {isPanelOpen ? <FiChevronDown /> : <FiChevronUp />}
        </button>
        <button className={activeTab === 'add' ? 'active' : ''} onClick={() => switchTab('add')}>
          <AiOutlinePlus /> Ajouter un produit
        </button>
        <button className={activeTab === 'edit' ? 'active' : ''} onClick={() => switchTab('edit')}>
          <MdModeEditOutline /> Modifier un produit
        </button>
      </div>
      <div className="content">
        {activeTab === 'add' && <AddProductForm />}
        {activeTab === 'edit' && <EditProductForm />}
      </div>
    </div>
  );
};

export default AdminPanel;