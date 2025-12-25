import React from 'react';

interface Review {
  id: number;
  author: string;
  initial: string; // For the avatar
  date: string;
  rating: number; // 1-5
  text: string;
}

interface ReviewsListProps {
  overallRating: number;
  totalReviews: number;
  reviews: Review[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ overallRating, totalReviews, reviews }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`bi ${
          index < rating ? 'bi-star-fill text-orange-500' : 'bi-star text-custom-gray'
        } text-sm`}
      ></i>
    ));
  };

  return (
    <div className="rounded-3xl p-6 md:p-8">
      <div className="flex flex-col items-start mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-gray-900">{overallRating}</span>
          <div className="flex flex-col items-start">
            <div className="flex gap-1 text-orange-500">
              {renderStars(Math.round(overallRating))}
            </div>
            <span className="text-sm text-gray-500">{totalReviews} reviews</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-900 font-bold text-lg">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 leading-tight">{review.author}</h4>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
              <div className="flex gap-1 text-orange-500">{renderStars(review.rating)}</div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;
