import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MenuHeroProps {
  restaurant: {
    id: string;
    name: string;
    image: string;
    rating: number;

    description: string;
    deliveryTime: string;
    minOrder: string;
    cuisine: string;
  };
}

const MenuHero: React.FC<MenuHeroProps> = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[300px] md:h-[400px]">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />

      <div className="absolute top-1 left-0 z-30 container mx-auto px-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors text-white"
        >
          <i className="bi bi-arrow-left"></i>
          Back
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 pb-8">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
            <span className="bg-indigo-900 text-white px-2 py-0.5 rounded text-sm font-bold flex items-center gap-1">
              {restaurant.rating} <i className="bi bi-star-fill text-xs text-yellow-500"></i>
            </span>
            <span className="flex items-center gap-1">
              <i className="bi bi-dot"></i> {restaurant.cuisine}
            </span>

            <span className="flex items-center gap-1 text-gray-200">
              <i className="bi bi-clock"></i> {restaurant.deliveryTime}
            </span>
          </div>
          {/* <div className="w-1/5 flex items-center gap-2 mt-2">
            <button
                  onClick={() => navigate(`/${restaurant.id}/book`)}
                  className="w-full flex-1 bg-white border border-gray-200 text-indigo-900 font-bold py-2.5 !rounded-xl hover:bg-gray-50 transition-colors text-sm"
                >
                  Book Table
                </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MenuHero;
