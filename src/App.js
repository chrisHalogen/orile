import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import "./styles/main.scss";
import { Home, Menu, Listing } from "./pages";
import { bg_images } from "./data";

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     imageIndex === bg_images.length - 1
  //       ? setImageIndex(0)
  //       : setImageIndex(imageIndex + 1);

  //     // console.log(imageIndex);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [imageIndex]);

  const Layout = () => {
    return (
      <div
        className="main"
        // style={{ backgroundImage: `url(${bg_images[imageIndex]})` }}
        style={{ backgroundImage: `url(${bg_images[imageIndex]})` }}
      >
        <div className="inner-container">
          <Link to="/" className="logo-container">
            <img className="logo" src="/logo.png" alt="logo" />
          </Link>

          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/menu/:id",
          element: <Listing />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
