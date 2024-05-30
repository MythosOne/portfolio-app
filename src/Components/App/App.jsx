import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import BottomNav from '../Nav/BottomNav/BottomNav';
import HomePage from 'page/HomePage';
import Footer from '../Footer/Footer';
import './App.styled.js';

function App() {
  const [isVisible, setIsVisible] = useState(window.innerWidth <= 767);
  console.log('isVisible:', isVisible);

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
      <Header />
      {isVisible && <BottomNav />}
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
