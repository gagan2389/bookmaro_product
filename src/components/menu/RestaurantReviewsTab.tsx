import React from 'react';
import ReviewsList from './ReviewsList';
import restaurantData from '../../data/restaurantData.json';
import { useOutletContext } from 'react-router-dom';

const RestaurantReviewsTab: React.FC = () => {
  const { restaurant } = useOutletContext<{ restaurant: any }>();
  return (
    <div className="mt-6">
      <ReviewsList
        reviews={restaurantData.reviews}
        overallRating={restaurant.rating}
        totalReviews={restaurantData.reviews.length}
      />
    </div>
  );
};

export default RestaurantReviewsTab;
