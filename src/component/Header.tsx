import React, { useState } from "react";
import Logo from "../assest/logo1.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import { RootState } from "../store/appStore";
import { useAuth } from "../AuthContext";

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [login, setLogin] = useState(false);
  const { state, setLogout } = useAuth();

  const onlineStatus = useOnlineStatus();
  return (
    <nav className="flex justify-between bg-orange-400">
      <div className="flex justify-start items-center">
        <img src={Logo} alt="" className="m-2 w-14 h-14" />
        {state?.isLoggedIn && (
          <h2 className="m-2 text-xl">{state?.username || ""}</h2>
        )}
      </div>
      <div className="flex justify-evenly items-center mr-6">
        <ul className="flex justify-evenly cursor-pointer">
          <li className="p-2 text-xl">
            Online Status {onlineStatus ? "✅" : "🔴"}
          </li>
          <Link to="/">
            <li className="p-2 text-xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-2 text-xl">About </li>
          </Link>
          <Link to="/contact">
            <li className="p-2 text-xl">Contact </li>
          </Link>
          <Link to="/cart">
            <li className="p-2 text-xl font-bold">Cart ({cart?.total}) </li>
          </Link>
        </ul>

        <div
          onClick={() => {
            setLogout();
          }}
          className=" text-xl cursor-pointer"
        >
          {state?.isLoggedIn ? <h2>Logout</h2> : <h2>Login</h2>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
