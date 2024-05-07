import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('add');
  const [products, setProducts] = useState([]);


  const toggleAdminMode = () => setIsAdminMode(!isAdminMode);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);
  const switchTab = (tab) => setActiveTab(tab);
  const addProduct = (newProduct) => {
    const lastId = products.length > 0
      ? Math.max(...products.map(product => product.id))
      : 10;
    const newId = lastId + 1;
    setProducts([{ id: newId, ...newProduct }, ...products]);
  };

  return (
    <AdminContext.Provider value={{
      isAdminMode,
      toggleAdminMode,
      isPanelOpen,
      togglePanel,
      activeTab,
      switchTab,
      products,
      addProduct
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;