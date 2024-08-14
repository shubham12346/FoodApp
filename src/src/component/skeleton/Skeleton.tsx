import React from "react";

const Skeleton = () => {
  return (
    <div className="skeletonWrapper" data-testid="skeletonLoader">
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
      <div className="restaurantCardSkeleton"></div>
    </div>
  );
};

export default Skeleton;
