import React from 'react';
import RestaurantInfo from './RestaurantInfo';
import restaurantData from '../../data/restaurantData.json';

const RestaurantInfoTab: React.FC = () => {
  return (
    <div className="mt-6 flex justify-center">
      <RestaurantInfo restaurant={restaurantData.info} />
    </div>
  );
};

export default RestaurantInfoTab;
