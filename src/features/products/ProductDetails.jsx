import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <div>
      <h1>Product Details</h1>
      <h2>ID: {product.id}</h2>
      <p>Ttitle: {product.title}</p>
      <p>Unit Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <img src={product.image} alt={product.title} />
      <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
};

export async function loader({ params }) {
  const { id } = params;
  // Simulate an API call to fetch product details by ID
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product;
}

export default ProductDetails;
