import React, { lazy, Suspense } from "react";
import "./App.css";
import { Outlet, HashRouter, Routes, Route } from "react-router-dom";
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

// const appRouter = createHashRouter(
//   [
//     {
//       path: "/login",
//       element: <LoginForm />,
//       errorElement: <Error />,
//     },
//     {
//       path: "/",
//       element: (
//         <GuardedRoutes>
//           <AppLayout />
//         </GuardedRoutes>
//       ),
//       errorElement: <Error />,
//       children: [
//         {
//           path: "/",
//           element: (
//             <GuardedRoutes>
//               <Body />
//             </GuardedRoutes>
//           ),
//           errorElement: <Error />,
//         },
//         {
//           path: "about",
//           element: (
//             <GuardedRoutes>
//               <About />
//             </GuardedRoutes>
//           ),
//           errorElement: <Error />,
//         },
//         {
//           path: ":restId",
//           element: (
//             <Suspense fallback={<Loader />}>
//               <GuardedRoutes>
//                 <RestaurantIndexModule />
//               </GuardedRoutes>
//             </Suspense>
//           ),
//           errorElement: <Error />,
//         },
//         {
//           path: "contact",
//           element: (
//             <Suspense fallback={<Loader />}>
//               <GuardedRoutes>
//                 <ContactFile />
//               </GuardedRoutes>
//             </Suspense>
//           ),
//           errorElement: <Error />,
//         },
//         {
//           path: "cart",
//           element: (
//             <Suspense fallback={<Loader />}>
//               <GuardedRoutes>
//                 <CartIndex />
//               </GuardedRoutes>
//             </Suspense>
//           ),
//           errorElement: <Error />,
//         },
//       ],
//     },
//     {
//       path: "/*",
//       element: <LoginForm />,
//       errorElement: <Error />,
//     },
//   ],
//   { basename: basename }
// );

function App() {
  const basename = import.meta.env.VITE_BASENAME || "/";
  console.log("basename", basename);
  return (
    <Provider store={AppStore}>
      <AuthProvider>
        <HashRouter basename={basename}>
          <Routes>
            <Route index path="" element={<LoginForm />} />
            <Route
              path="home"
              element={
                <GuardedRoutes>
                  <AppLayout />
                </GuardedRoutes>
              }
            >
              <Route
                path=""
                element={
                  <GuardedRoutes>
                    <Body />
                  </GuardedRoutes>
                }
              />
              <Route
                path="about"
                element={
                  <GuardedRoutes>
                    <About />
                  </GuardedRoutes>
                }
              />
              <Route
                path=":restId"
                element={
                  <Suspense fallback={<Loader />}>
                    <GuardedRoutes>
                      <RestaurantIndexModule />
                    </GuardedRoutes>
                  </Suspense>
                }
              />
              <Route
                path="contact"
                element={
                  <Suspense fallback={<Loader />}>
                    <GuardedRoutes>
                      <ContactFile />
                    </GuardedRoutes>
                  </Suspense>
                }
              />
              <Route
                path="cart"
                element={
                  <Suspense fallback={<Loader />}>
                    <GuardedRoutes>
                      <CartIndex />
                    </GuardedRoutes>
                  </Suspense>
                }
              />
            </Route>
            <Route path="/*" element={<LoginForm />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
