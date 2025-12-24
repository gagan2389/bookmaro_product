import { useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HomeFilters from './components/HomeFilters';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      <NavBar />
      <HeroSection />
      <HomeFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <RestaurantList activeFilter={activeFilter} />
      <Footer />
    </>
  )
}

export default App
