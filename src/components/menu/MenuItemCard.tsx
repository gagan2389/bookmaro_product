import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  isVeg: boolean;
  isBestseller: boolean;
  rating: number;
  reviews: number;
}

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row h-full overflow-hidden">
      <div className="relative w-full sm:w-40 h-56 sm:h-auto flex-shrink-0 bg-gray-50 flex items-center justify-center text-center">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-indigo-900 font-bold opacity-60 text-lg">{item.name}</span>
        )}
        {item.isBestseller && (
          <div
            className={`absolute top-3 right-3 px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-sm bg-blue-800 text-white`}
          >
            <span className="text-xs font-bold uppercase tracking-wide">Bestseller</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-1 flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-indigo-900 text-lg leading-tight">{item.name}</h3>
          <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded ml-2 flex-shrink-0">
            <span className="font-bold text-gray-700 text-sm">{item.rating}</span>
            <i className="bi bi-star-fill text-yellow-500 text-xs"></i>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          {item.description.length > 100 && !isExpanded
            ? `${item.description.substring(0, 100)}... `
            : `${item.description} `}
          {item.description.length > 100 && (
            <span
              className="text-indigo-900 font-bold cursor-pointer hover:underline text-xs"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </span>
          )}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`border ${item.isVeg ? 'border-green-600' : 'border-red-500'} rounded-sm w-3.5 h-3.5 flex items-center justify-center`}
            >
              <div
                className={`w-2 h-2 ${item.isVeg ? 'bg-green-600' : 'bg-red-500'} rounded-full`}
              ></div>
            </div>
            <span className="font-bold text-indigo-900 text-xl">{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
