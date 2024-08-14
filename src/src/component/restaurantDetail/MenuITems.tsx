import React from "react";

const MenuITems = ({
  name,
  price,
  rating,
  deliveryTime,
  logo,
  addRemoveConfig,
  handleAddRemove,
}) => {
  return (
    <div className="flex justify-between p-2 my-2 bg-white t ">
      <div className="">
        <h4 className="font-bold">{name}</h4>
        <hr className="" />
        <h4> &#8377;{price} </h4>
        <h4> Rating ⭐ {rating}</h4>
        <h4>{deliveryTime} Cooking Time 👩‍🍳🍳</h4>
      </div>
      <div className="relative ">
        <img src={logo} className="w-36 relative " alt="item " />
        <div
          onClick={handleAddRemove}
          className="absolute bg-orange-500 px-6 py-1 rounded-sm bottom-1 left-8 text-white cursor-pointer"
        >
          {addRemoveConfig}
        </div>
      </div>
    </div>
  );
};

export default MenuITems;
