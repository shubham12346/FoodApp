import React from "react";
import { useNavigate } from "react-router-dom";

const url = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
const cloudId = "e0839ff574213e6f35b3899ebf1fc597";
interface Menu {
  starters: string[];
  lunch: string[];
  dinner: string[];
  beverages: string[];
}

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  time: string;
  type: string;
  location: string;
  promoted: boolean;
  imageUrl: string;
  menu: Menu;
}

interface RestaurantsProps {
  restaurant: Restaurant;
}

const Restaurants: React.FC<RestaurantsProps> = (props: any) => {
  console.log("props", props);
  const { name, rating, time, type, location, imageUrl, id } = props.restaurant;
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/home/${id}`);
  };

  return (
    <div
      className="restaurantCard"
      onClick={() => handleNavigate(id)}
      data-testid="restaurantCard"
    >
      <img src={imageUrl} alt="" className="cardImg" />
      <h2>{name}</h2>
      <h3>
        <span>*</span>
        {rating}
        <span>.</span>
        <span>{time}</span>
      </h3>
      <h4>{type}</h4>
      <h4>{location}</h4>
    </div>
  );
};

// Higher Order Component
//  input restaurantCard => re

export const withPromotedLevel = (RestaurantCard: any) => {
  return (props: any) => {
    return (
      <div className="restaurantCardWithPromotedLabel relative">
        <div className="absolute top-14 left-5 bg-orange-500 rounded p-1">
          <label className=" text-sm text-white ">Promoted</label>
        </div>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default Restaurants;
