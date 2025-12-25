import React from 'react';

interface RestaurantInfoProps {
  restaurant: {
    name: string;
    description: string;
    cuisine: string;
    deliveryTime: string;
    minOrder: string;
    address?: string;
    phone?: string;
    openingHours?: string;
  };
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-w-3xl">
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <i className="bi bi-geo-alt text-lg text-indigo-900"></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-0.5">Address</h4>
            <p className="text-gray-600 text-sm">{restaurant.address || 'Address not available'}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <i className="bi bi-telephone text-lg text-indigo-900"></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-0.5">Phone</h4>
            <p className="text-gray-600 text-sm">{restaurant.phone || 'Phone not available'}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <i className="bi bi-clock text-lg text-indigo-900"></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-0.5">Opening Hours</h4>
            <p className="text-gray-600 text-sm">
              {restaurant.openingHours || 'Hours not available'}
            </p>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-100" />

      <div className="mb-6">
        <h3 className="font-bold text-gray-900 mb-2">About</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{restaurant.description}</p>
      </div>

      <button className="w-full bg-indigo-900 text-white font-semibold py-3 rounded-xl hover:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200/50">
        Book a Table
      </button>
    </div>
  );
};

export default RestaurantInfo;
