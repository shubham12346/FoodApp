import React from "react";

const RestaurantInfoCard = ({ restaurantDetail }) => {
  const { rating, type, time, location } = restaurantDetail;
  return (
    <div className="  my-2">
      <div className=" my-2">
        <h2 className="text-3xl italic  items-start font-bold">
          {restaurantDetail?.name}
        </h2>
      </div>
      <div className="pb-3 px-3 bg-gray-400 rounded-b-xl">
        <div className="bg-white mt-5  shadow-2xl ">
          <div className="px-5 py-3">
            <div>
              <span>{rating}✳️ &#8377; 200 for One</span>
            </div>
            <div>
              <span>{type}</span>
            </div>
          </div>
          <div className="px-5 py-1">
            <span>Time ⏲️ {time} </span>
          </div>
          <hr className="my-3  bg-black" />
          <div className="px-5 py-2">
            <span>
              Location : <span className="font-bold">{location}</span> | 🚴‍♂️{" "}
              <span className="font-bold"> 100</span>
              &#8377; <span>Delivery fee will apply </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoCard;
