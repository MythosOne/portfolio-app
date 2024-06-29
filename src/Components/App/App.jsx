import React, { useState, useEffect, useCallback, createContext } from 'react';
import Header from '../Header/Header';
import BottomNav from '../Nav/BottomNav/BottomNav';
import HomePage from 'page/HomePage';
import Footer from '../Footer/Footer';
import Toastify from 'components/Toastify/Toastify';
import './App.styled.js';

export const AppContext = createContext();

function App() {
  const [toast, setToast] = useState({});
  const [isVisible, setIsVisible] = useState(window.innerWidth <= 767);
  const handleResize = useCallback(() => {
    setTimeout(() => {
      setIsVisible(window.innerWidth <= 767);
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <AppContext.Provider value={{ toast, setToast }}>
        <Header />
        {isVisible && <BottomNav />}
        <Toastify message={toast}/>
        <HomePage />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
