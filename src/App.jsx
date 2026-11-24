import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./features/ui/AppLayout";
import Home from "./features/ui/Home";
import Products from "./features/products/Products";
import ProductDetails from "./features/products/ProductDetails";
import CreateProduct from "./features/products/CreateProduct";
import Error from "./features/ui/Error";
import { loader as productsLoader } from "./features/products/Products";
import { loader as productDetailsLoader } from "./features/products/ProductDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: productDetailsLoader,
        errorElement: <Error />,
      },
      { path: "/products/create", element: <CreateProduct /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
