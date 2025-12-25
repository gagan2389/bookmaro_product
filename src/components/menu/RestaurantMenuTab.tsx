import { FilterList } from '../FilterList';
import MenuItemCard from './MenuItemCard';
import { useState } from 'react';
import dummydata from '../../dummydata.json';

const RestaurantMenuTab = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Bestsellers', 'Appetizers', 'Mains', 'Desserts', 'Beverages'];
  const menuItems = dummydata.menuItems;

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : activeCategory === 'Bestsellers'
        ? menuItems.filter((item) => item.isBestseller)
        : menuItems.filter((item) => item.category === activeCategory);

  return (
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
  );
};

export default RestaurantMenuTab;
