import { useParams, Link } from 'react-router-dom';
import dummydata from '../dummydata.json';
import { useState } from 'react';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';
import { FilterList } from '../components/FilterList';
import MenuItemCard from '../components/menu/MenuItemCard';
import ReviewsList from '../components/menu/ReviewsList';
import RestaurantInfo from '../components/menu/RestaurantInfo';

const MenuPage = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = dummydata.restaurants.find((r) => r.id === id);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Menu');

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <i className="bi bi-exclamation-circle text-4xl text-gray-400 mb-4"></i>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Restaurant not found</h2>
        <p className="text-gray-500 mb-6">The restaurant you are looking for does not exist.</p>
        <Link
          to="/"
          className="bg-indigo-900 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }
  const categories = ['All', 'Bestsellers', 'Appetizers', 'Mains', 'Desserts', 'Beverages'];
  const tabs = ['Menu', 'Reviews', 'Info'];
  const menuItems = dummydata.menuItems;

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : activeCategory === 'Bestsellers'
        ? menuItems.filter((item) => item.isBestseller)
        : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <MenuHero restaurant={restaurant} />
      <div className="container mx-auto px-2 -mt-3 relative z-30">
        <div className="bg-white rounded-3xl shadow-lg border-b border-gray-100 p-2 md:p-6">
          <MenuTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {activeTab === 'Menu' && (
          <>
            <FilterList
              items={categories.map((cat) => ({ id: cat, label: cat, value: cat }))}
              activeValue={activeCategory}
              onSelect={setActiveCategory}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {activeTab === 'Reviews' && (
          <div className="mt-6">
            <ReviewsList
              reviews={dummydata.reviews}
              overallRating={restaurant.rating}
              totalReviews={dummydata.reviews.length}
            />
          </div>
        )}

        {activeTab === 'Info' && (
          <div className="mt-6 flex justify-center">
            <RestaurantInfo restaurant={restaurant} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
