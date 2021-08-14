import React from "react";

export default function Card() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img
          className="w-64 object-cover rounded-t-md"
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt=""
        />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-700">Zebra succulent</h1>
          <p className="text-sm mt-2 text-gray-700">Two sizes</p>
          <div className="mt-3 space-x-4 flex p-1">
            <div className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
              <span className="block h-6 w-6 bg-green-400 rounded-full"> </span>
            </div>
            <div className="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
              <span className="block h-6 w-6 bg-blue-400 rounded-full"> </span>
            </div>
            <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
              <span className="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
            </div>
          </div>
          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button className="block text-xl font-semibold text-gray-700 cursor-auto">$12.99</button>
            <button className="text-lg block font-semibold py-2 px-6 text-white hover:text-green-100 bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
