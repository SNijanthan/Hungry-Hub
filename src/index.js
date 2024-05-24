import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";

const Grocery = lazy(() => import("./Components/Grocery"));

const Cart = lazy(() => import("./Components/Cart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading ....!</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ....!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
