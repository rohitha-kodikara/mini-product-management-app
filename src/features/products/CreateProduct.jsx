import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";

const CreateProduct = () => {
  const inputClasses =
    "w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition";
  const labelClasses = "block text-sm font-medium text-slate-700 mb-1";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-200 mt-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Create New Product
      </h1>
      <Form className="space-y-4" method="POST" action="/products/create">
        <div>
          <label className={labelClasses}>Product Title</label>
          <input type="text" name="title" className={inputClasses} required />
        </div>

        <div>
          <label className={labelClasses}>Price ($)</label>
          <input
            type="number"
            name="price"
            className={inputClasses}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className={labelClasses}>Description</label>
          <textarea
            name="description"
            className={`${inputClasses} h-24`}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Category</label>
            <input
              type="text"
              name="category"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label className={labelClasses}>Rating (0-5)</label>
            <input
              type="number"
              name="rating"
              className={inputClasses}
              required
              min="0"
              max="5"
              step="0.1"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Create Product
        </button>
      </Form>
    </div>
  );
};

export async function action({ request }) {
  const formData = await request.formData();

  const product = {
    title: formData.get("title"),
    price: Number(formData.get("price")),
    description: formData.get("description"),
    category: formData.get("category"),
  };

  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Product create කරන්න නොහැකි විය");
  }

  const createdProduct = await response.json();
  console.log(createdProduct);

  return redirect(`/products/${createdProduct.id}`);
}

export default CreateProduct;
