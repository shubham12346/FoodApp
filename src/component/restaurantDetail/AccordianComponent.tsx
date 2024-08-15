import React from "react";
import logo from "../../assest/logo1.jpg";
import MenuITems from "./MenuITems";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice.service";
import { AppDispatch } from "../../store/appStore";

const AccordianComponent = ({
  restaurantMenu,
  handleSelectedMenu,
  selectedMenu,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectedMenuItem = (item) => {
    console.log("item", item);
    dispatch(addToCart({ item: item }));
  };
  return (
    <div>
      {Object?.keys(restaurantMenu)?.map((menuName, index) => {
        if (menuName !== "id") {
          return (
            <div
              className=" lg:mx-32 "
              key={`${index}-${restaurantMenu[menuName]}`}
            >
              <div
                className="bg-gray-500  flex justify-between items-center px-2 mb-5"
                onClick={() => handleSelectedMenu(restaurantMenu[menuName])}
              >
                <div>
                  <h3 className="text-xl font-semibold ">
                    {menuName?.toUpperCase()} (
                    {restaurantMenu[menuName].length || 0})
                  </h3>
                </div>
                <div>
                  {restaurantMenu[menuName] == selectedMenu ? "⬆️" : "⬇️"}
                </div>
              </div>
              {restaurantMenu[menuName] == selectedMenu && (
                <div className="ransition duration-1000 ease-in-out">
                  {restaurantMenu[menuName]?.map((item, index) => (
                    <MenuITems
                      deliveryTime={item?.deliveryTime}
                      logo={logo}
                      name={item?.name}
                      price={item?.price}
                      rating={item?.rating}
                      key={`${index}-${item?.name}`}
                      addRemoveConfig={`Add ➕`}
                      handleAddRemove={() => handleSelectedMenuItem(item)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default AccordianComponent;
