import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Page from "../components/Page1/Page";
import App from "../App";
import Womens from "../components/womensCloth/Womens";
import Mens from "../components/Mens/Mens";
import Product from "../components/Product/Product";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/page2",
        element: <Page />,
        children: [],
      },
    ],
  },
  {
    path: "/:womens",
    element: <Womens />,
    children: [],
  },
  {
    path: "/Mens-loafers-shoes",
    element: <Mens />,
    children: [],
  },
  {
    path: "/Mens-loafers-shoes/product/:id",
    element: <Product />,
    children: [],
  },
]);
