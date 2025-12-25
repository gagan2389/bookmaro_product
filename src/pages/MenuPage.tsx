import { useParams, Link, Outlet } from 'react-router-dom';
import dummydata from '../dummydata.json';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';

const MenuPage = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = dummydata.restaurants.find((r) => r.id === id);

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
  const tabs = ['Menu', 'Reviews', 'Info'];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <MenuHero restaurant={restaurant} />
      <div className="container mx-auto px-2 -mt-3 relative z-30">
        <div className="bg-white rounded-3xl shadow-lg border-b border-gray-100 p-2 md:p-6 mb-6">
          <MenuTabs tabs={tabs} />
        </div>

        <Outlet context={{ restaurant }} />
      </div>
    </div>
  );
};

export default MenuPage;
