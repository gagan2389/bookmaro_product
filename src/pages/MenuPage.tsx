import { useParams, Link } from 'react-router-dom';
import dummydata from '../dummydata.json';
import { useState } from 'react';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';
import { FilterList } from '../components/FilterList';
import MenuItemCard from '../components/menu/MenuItemCard';

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
  const menuItems = [
    {
      id: 101,
      name: 'Signature Spicy Pasta',
      price: 350,
      description:
        'Fresh handmade pasta tossed in our secret spicy tomato sauce with basil and parmesan.',

      image:
        'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'Mains',
      isVeg: true,
      isBestseller: true,
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 102,
      name: 'Crispy Calamari',
      price: 420,
      description: 'Tender lighty fried calamari rings served with lemon aioli and marinara sauce.',

      image:
        'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'Appetizers',
      isVeg: false,
      isBestseller: false,
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 103,
      name: 'Truffle Mushroom Risotto',
      price: 450,
      description:
        'Creamy arborio rice with wild mushrooms, truffle oil, and aged parmesan cheese. Creamy arborio rice with wild mushrooms, truffle oil, and aged parmesan cheese. Creamy arborio rice with wild mushrooms, truffle oil, and aged parmesan cheese.',

      image:
        'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'Mains',
      isVeg: true,
      isBestseller: true,
      rating: 4.9,
      reviews: 210,
    },
    {
      id: 104,
      name: 'Classic Tiramisu',
      price: 280,
      description:
        'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',

      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'Desserts',
      isVeg: true,
      isBestseller: false,
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 105,
      name: 'Grilled Salmon',
      price: 550,
      description:
        'Fresh Atlantic salmon fillet grilled to perfection, served with asparagus and lemon butter.',

      category: 'Mains',
      isVeg: false,
      isBestseller: false,
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 106,
      name: 'Craft Lemonade',
      price: 120,
      description: 'House-made lemonade with fresh lemons, mint leaves, and a touch of honey.',

      image:
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      category: 'Beverages',
      isVeg: true,
      isBestseller: false,
      rating: 4.4,
      reviews: 45,
    },
  ];

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
      </div>
    </div>
  );
};

export default MenuPage;
