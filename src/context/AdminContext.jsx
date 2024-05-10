import React, { createContext, useState, useContext } from 'react';
import { fakeMenu } from '../fakeData/fakeMenu';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {

  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('add');
  const [products, setProducts] = useState(fakeMenu);
  const [selectedProduct, setSelectedProduct] = useState(null);


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
  const removeProduct = (productId) => {
    // console.log(productId);
    setProducts(products.filter(product => product.id !== productId));
  };
  const restoreDefaultProducts = () => {
    setProducts(fakeMenu);
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
      addProduct,
      removeProduct,
      restoreDefaultProducts,
      selectedProduct,
      setSelectedProduct,
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;