import React from "react";
import offlineImg from "../../assest/restaurantImages/offlineImg.png";

const OfflineComponent = () => {
  return (
    <div className="offline">
      <h3>Looks like you are offline. Please check your internet connection</h3>
      <img src={offlineImg} alt="offline" className="offlineImg" />
    </div>
  );
};

export default OfflineComponent;
