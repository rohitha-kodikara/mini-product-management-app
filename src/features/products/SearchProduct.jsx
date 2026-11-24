import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/products/${query}`);
    setQuery("");
  }

  return (
    <form action="" onSubmit={handleSearch}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search Product"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchProduct;
