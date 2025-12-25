import { useState } from "react";
import vitaminC from "../assets/vitaminC.jpg";

const tabs = [
  "All Medicines",
  "Prescription",
  "OTC",
  "Antibiotics",
  "Pain Relief",
  "Vitamins",
  "Supplements",
];

const products = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    type: "Tablet",
    price: 28.5,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
  },
  {
    id: 2,
    name: "Crocin Advance",
    type: "Tablet",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1581159186721-b68b78da4ec9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Dolo 650",
    type: "Tablet",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
  },
  {
    id: 4,
    name: "Vitamin C",
    type: "Capsule",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
  },
  {
    id: 5,
    name: "Cetirizine 10mg",
    type: "Tablet",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
  },
  {
    id: 6,
    name: "Multivitamin",
    type: "Capsule",
    price: 185,
    image:
      "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df",
  },
];

const MedicinesSection = () => {
  const [activeTab, setActiveTab] = useState("All Medicines");

  return (
    <div className="px-10 py-12 bg-white">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-xl"
            />

            <h3 className="font-semibold mt-4">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500">
              {product.type}
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-green-600 font-semibold">
                ₹{product.price.toFixed(2)}
              </span>

              <button className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinesSection;
