import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import MenuITems from "../restaurantDetail/MenuITems";
import logo from "../../assest/logo1.jpg";
import { clearCart } from "../../store/cartSlice.service";

const CartIndex = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(clearCart({}));
  };

  const clearCarts = () => {
    dispatch(clearCart({}));
  };

  return (
    <>
      {cart?.items?.length > 0 ? (
        <div className=" ">
          <div className="m-5">
            <button
              className="bg-orange-500 px-5 text-xl rounded"
              onClick={clearCarts}
            >
              Clear Cart
            </button>
          </div>
          <div className=" m-4 p-5 w-4/5">
            {cart?.items[0]?.item?.name &&
              cart?.items?.map((item, index) => (
                <div
                  key={`${index}-${item?.item?.name}`}
                  className="m-3 bg-orange-400 p-5"
                >
                  <MenuITems
                    addRemoveConfig={"Remove"}
                    deliveryTime={item?.item?.deliveryTime}
                    handleAddRemove={() => handleRemoveItem(item)}
                    logo={logo}
                    name={item?.item?.name}
                    price={item?.item?.price}
                    rating={item?.item.rating}
                  />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="bg-orange-500">
          <h2 className="text-xl text-white p-5">
            Please add some items from the home menu 😶😶😶😶😶😶😶😶
          </h2>
        </div>
      )}
    </>
  );
};

export default CartIndex;
