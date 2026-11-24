import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();

  return (
    <div>
      <h1 className=" font-bold text-blue-700">Product list</h1>
    </div>
  );
};

export async function loader() {
  // Simulate an API call to fetch products
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

export default Products;
