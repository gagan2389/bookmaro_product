import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import RestaurantMenuTab from './components/menu/RestaurantMenuTab';
import RestaurantReviewsTab from './components/menu/RestaurantReviewsTab';
import RestaurantInfoTab from './components/menu/RestaurantInfoTab';

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
          <Route path="/:id" element={<MenuPage />}>
            <Route index element={<Navigate to="menu" replace />} />
            <Route path="menu" element={<RestaurantMenuTab />} />
            <Route path="reviews" element={<RestaurantReviewsTab />} />
            <Route path="info" element={<RestaurantInfoTab />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
