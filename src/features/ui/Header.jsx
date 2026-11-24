import React from "react";
import { Link } from "react-router-dom";
import SearchProduct from "../products/SearchProduct";

const Header = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700">Welcome to the App. </h2>
      <Link
        to="/products"
        type="button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Products
      </Link>
      <br />
      <SearchProduct />
      <br />
    </div>
  );
};

export default Header;
