import React, { lazy, Suspense } from "react";
import "../App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/about/About";
import Error from "./component/Error";
import LoginForm from "./component/login/LoginForm";
import { AuthProvider } from "./AuthContext";
import GuardedRoutes from "./component/guardedRoutes/GuardedRoutes";
import { Provider } from "react-redux";
import AppStore from "./store/appStore";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export const Loader = () => {
  return <div style={{ margin: "100px" }}>Loader....</div>;
};

const ContactFile = lazy(() => import("./component/Contact"));
const RestaurantIndexModule = lazy(
  () => import("./component/restaurantDetail/RestaurantIndex")
);

const CartIndex = lazy(() => import("./component/cart/CartIndex"));

const appRouter = createBrowserRouter(
  [
    {
      path: "/login",
      element: <LoginForm />,
      errorElement: <Error />,
    },
    {
      path: "/",
      element: (
        <GuardedRoutes>
          <AppLayout />
        </GuardedRoutes>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <GuardedRoutes>
              <Body />
            </GuardedRoutes>
          ),
          errorElement: <Error />,
        },
        {
          path: "/about",
          element: (
            <GuardedRoutes>
              <About />
            </GuardedRoutes>
          ),
          errorElement: <Error />,
        },
        {
          path: "/:restId",
          element: (
            <Suspense fallback={<Loader />}>
              <GuardedRoutes>
                <RestaurantIndexModule />
              </GuardedRoutes>
            </Suspense>
          ),
          errorElement: <Error />,
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loader />}>
              <GuardedRoutes>
                <ContactFile />
              </GuardedRoutes>
            </Suspense>
          ),
          errorElement: <Error />,
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Loader />}>
              <GuardedRoutes>
                <CartIndex />
              </GuardedRoutes>
            </Suspense>
          ),
          errorElement: <Error />,
        },
      ],
    },
    {
      path: "*",
      element: <LoginForm />,
      errorElement: <Error />,
    },
  ],
  { basename: "/FoodApp.github.io/" }
);

function App() {
  return (
    <Provider store={AppStore}>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </Provider>
    // <>Hello this is react app</>
  );
}

export default App;
