import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestaurantList from "./RestaurantList";
import { restaurantData } from "./restaurant";
import Skeleton from "./skeleton/Skeleton";
import Title from "./Title";
import useOnlineStatus from "./hooks/useOnlineStatus";
import OfflineComponent from "./offline/OfflineComponent";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // fetchRestaurantData();

    fetchMockData();
  }, []);

  // const fetchRestaurantData = async () => {
  //   const res = await getRestaurantData();
  //   console.log("res", res?.data?.cards[0]);
  // };

  const fetchMockData = () => {
    setLoader(true);
    setTimeout(() => {
      setTheState();
    }, 2000);
  };

  const setTheState = () => {
    setRestaurantList(restaurantData);
    setFilteredData(restaurantData);
    setLoader(false);
  };

  const handleSearchText = (searchText: string) => {
    console.log("searchText", searchText);
    if (searchText === "" && restaurantList?.length === 0) {
      setFilteredData(restaurantList);
    } else {
      const filteredList = restaurantList?.filter((restaurant: any) =>
        restaurant?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setDataAfterSearch(filteredList);
    }
  };

  const setDataAfterSearch = (filteredList: any) => {
    setLoader(true);
    setTimeout(() => {
      setFilteredData(filteredList);
      setLoader(false);
    }, 2000);
  };

  return (
    <>
      {onlineStatus ? (
        <div className="px-10 overflow-y-auto">
          <Search handleSearchText={handleSearchText} />
          <Title title={"Restaurant List "} className={"px-2"} />
          {loader ? (
            <Skeleton />
          ) : (
            filteredData && (
              <RestaurantList
                restaurant={filteredData}
                data-testid="restaurantContainer"
              />
            )
          )}
        </div>
      ) : (
        <div className="bodyWrapper">
          <OfflineComponent />
        </div>
      )}
    </>
  );
};

export default Body;
