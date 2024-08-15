import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantData } from "../restaurant";

const RestaurantDetail = () => {
  const { restId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [restaurantDetail, setRestaurantDetail] = useState<any>();
  const [loader, setLoader] = useState(false);
  let timer;

  useEffect(() => {
    if (restId) {
      setLoader(true);
      getRestaurantDetail(restId);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [restId]);

  const getRestaurantDetail = (restId) => {
    timer = setTimeout(() => {
      const restaurantMenu = restaurantData?.filter(
        (restaurant) => restaurant?.id == restId
      );
      setRestaurantDetail(restaurantMenu);
      setLoader(false);
    }, 2000);
  };

  return (
    <div>
      <h1> RestaurantDetail</h1>
      <div className="restaurantDetailWrapper">
        {loader ? (
          <h1>Loading...</h1>
        ) : (
          restaurantDetail && (
            <div>
              <div>
                <h3>{restaurantDetail[0]?.name}</h3>
                <img
                  src={restaurantDetail[0]?.imageUrl}
                  alt=""
                  className="cardImg"
                />
              </div>

              <h3>Menu Items</h3>
              <div>
                <span>Starters : </span>
                <span>{restaurantDetail[0]?.menu?.starters?.join(", ")}</span>
              </div>
              <div>
                <span>Lunch : </span>
                <span>{restaurantDetail[0]?.menu?.lunch?.join(", ")}</span>
              </div>
              <div>
                <span>Dinner : </span>
                <span>{restaurantDetail[0]?.menu?.dinner?.join(", ")}</span>
              </div>
              <div>
                <span>Beverages : </span>
                <span>{restaurantDetail[0]?.menu?.beverages?.join(", ")}</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
