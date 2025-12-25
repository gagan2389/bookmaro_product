
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <div className="!md:mt-5 mt-15">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu/:id" element={<MenuPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
