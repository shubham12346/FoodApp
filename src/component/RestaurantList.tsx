import React from "react";
import Restaurants, { withPromotedLevel } from "./Restaurants";

const RestaurantList = ({ restaurant }: any) => {
  const RestaurantPromoted = withPromotedLevel(Restaurants);
  return (
    <div>
      <div className="restaurantContainer">
        {restaurant?.map((restaurantItem: any, index: number) =>
          restaurantItem.promoted ? (
            <RestaurantPromoted key={index} restaurant={restaurantItem} />
          ) : (
            <Restaurants key={index} restaurant={restaurantItem} />
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
