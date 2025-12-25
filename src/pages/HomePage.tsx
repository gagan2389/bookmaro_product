
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import HomeFilters from '../components/HomeFilters';
import RestaurantList from '../components/RestaurantList';

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <>
            <HeroSection />
            <HomeFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <RestaurantList activeFilter={activeFilter} />
        </>
    );
};

export default HomePage;
