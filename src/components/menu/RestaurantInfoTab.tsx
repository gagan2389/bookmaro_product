import React from 'react';
import RestaurantInfo from './RestaurantInfo';
import { useOutletContext } from 'react-router-dom';

const RestaurantInfoTab: React.FC = () => {
  const { restaurant } = useOutletContext<{ restaurant: any }>();

  return (
    <div className="mt-6 flex justify-center">
      <RestaurantInfo restaurant={restaurant} />
    </div>
  );
};

export default RestaurantInfoTab;
