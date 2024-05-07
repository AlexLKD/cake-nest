import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AdminProvider>
  <React.StrictMode>
    <BrowserRouter>
        <App />    
    </BrowserRouter>
  </React.StrictMode>
    </AdminProvider>
)
