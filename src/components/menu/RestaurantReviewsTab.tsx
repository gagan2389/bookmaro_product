import React from 'react';
import ReviewsList from './ReviewsList';
import dummydata from '../../dummydata.json';
import { useOutletContext } from 'react-router-dom';

const RestaurantReviewsTab: React.FC = () => {
  const { restaurant } = useOutletContext<{ restaurant: any }>();
  return (
    <div className="mt-6">
      <ReviewsList
        reviews={dummydata.reviews}
        overallRating={restaurant.rating}
        totalReviews={dummydata.reviews.length}
      />
    </div>
  );
};

export default RestaurantReviewsTab;
