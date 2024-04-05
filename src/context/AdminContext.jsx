import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('add');

  const toggleAdminMode = () => setIsAdminMode(!isAdminMode);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);
  const switchTab = (tab) => setActiveTab(tab);

  return (
    <AdminContext.Provider value={{ isAdminMode, toggleAdminMode, isPanelOpen, togglePanel, activeTab, switchTab }}>
      {children}
    </AdminContext.Provider>
  );
};