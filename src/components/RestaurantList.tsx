
import React from 'react';
import { useNavigate } from 'react-router-dom';
import dummydata from '../dummydata.json';

interface RestaurantListProps {
    activeFilter: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ activeFilter }) => {
    const navigate = useNavigate();
    const filteredRestaurants = dummydata.restaurants.filter(restaurant => {
        if (activeFilter === 'all') return true;
        const cuisine = restaurant.cuisine.toLowerCase();
        const filter = activeFilter.toLowerCase();
        return cuisine === filter;
    });

    return (
        <div className="container mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRestaurants.map((restaurant) => (
                    <div key={restaurant.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="relative h-48 w-full">
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                <i className="bi bi-star-fill text-orange-500 text-xs"></i>
                                <span className="text-sm font-bold text-gray-800">{restaurant.rating}</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-indigo-900">{restaurant.name}</h3>
                                <span className="text-gray-400 font-medium text-sm">{restaurant.priceRange}</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                {restaurant.description}
                            </p>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <i className="bi bi-clock"></i>
                                        <span>{restaurant.deliveryTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>{restaurant.minOrder}</span>
                                    </div>
                                </div>
                                <span className="bg-indigo-50 text-indigo-900 text-xs px-3 py-1 rounded-full font-medium">
                                    {restaurant.cuisine}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => navigate(`/menu/${restaurant.id}`)}
                                    className="flex-1 bg-indigo-900 hover:bg-indigo-800 text-white font-semibold py-2.5 !rounded-xl transition-colors text-sm"
                                >
                                    View Menu
                                </button>
                                <button className="flex-1 bg-white border border-gray-200 text-indigo-900 font-bold py-2.5 !rounded-xl hover:bg-gray-50 transition-colors text-sm">
                                    Book Table
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantList;
