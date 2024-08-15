import React, { useEffect, useState } from "react";
import RestaurantInfoCard from "./RestaurantInfoCard.tsx";
import { useParams } from "react-router-dom";
import { restaurantData, restaurantMenus } from "../restaurant.ts";
import AccordionComponent from "./AccordianComponent.tsx";

const RestaurantIndex = () => {
  const { restId } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("");
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
      if (restaurantMenu) {
        setRestaurantDetail(restaurantMenu);
      }
      const menus = restaurantMenus?.filter((item) => item?.id == restId);

      if (menus) {
        setRestaurantMenu(menus[0]);
        setSelectedMenu("starters");
      }
      setLoader(false);
    }, 2000);
  };

  const handleSelectedMenu = (menuName) => {
    setSelectedMenu(menuName);
  };

  return (
    <div>
      <div className="mx-40  lg:mx-80   my-5">
        {restaurantDetail[0] && (
          <div className="lg:mx-32">
            <RestaurantInfoCard restaurantDetail={restaurantDetail[0] || {}} />
          </div>
        )}
        {selectedMenu && (
          <AccordionComponent
            restaurantMenu={restaurantMenu}
            selectedMenu={selectedMenu}
            handleSelectedMenu={handleSelectedMenu}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantIndex;
