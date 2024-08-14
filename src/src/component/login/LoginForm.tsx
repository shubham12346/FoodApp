import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../AuthContext";
import { useFormik } from "formik";

const LoginForm = () => {
  const { setLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      handleLogin(values?.username);
    },
  });

  const handleLogin = (username) => {
    setLogin(username);
    localStorage.setItem("login", username);
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-orange-500  h-screen flex items-center justify-center ">
      <div className="bg-gradient-to-b from-orange-500  w-1/3 p-5 rounded-xl shadow-xl min-h-[500px]">
        <div className="text-white">
          <h2 className="text-2xl"> Login to FoodWoo </h2>
          <form
            action=""
            method="post"
            className=""
            onSubmit={formik?.handleSubmit}
          >
            <div className="flex flex-col p-2">
              <label htmlFor="username" className="text-xl ">
                Username
              </label>
              <input
                type="text"
                name="username"
                id=""
                value={formik.values.username}
                onChange={formik.handleChange}
                required
                autoComplete="off"
                className="border-2 border-white text-black w-3/4 text-xl"
                autoFocus={true}
              />
            </div>
            <div className="flex flex-col p-2">
              <label htmlFor="password" className="text-xl">
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                value={formik.values.password}
                onChange={formik.handleChange}
                className="border-2  border-white text-black w-3/4 text-xl"
                autoFocus={true}
              />
            </div>
            <div className="flex flex-col p-2">
              <label htmlFor="role" className="text-xl">
                Role
              </label>
              <select
                name="role"
                id=""
                className="w-6/12 border-2  border-white p-2 text-black"
              >
                <option id="" className="p-3">
                  User
                </option>
                <option id="">Admin</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 py-2 px-16 my-5 rounded hover:bg-orange-800 "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
