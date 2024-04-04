import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/pages/error/ErrorPage'; 
import LoginPage from './components/pages/login/LoginPage';
import Profile from './components/pages/order/Profile';

function App() {
    return(
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='order/:username' element={<Profile />}/>
        <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    );

}

export default App
