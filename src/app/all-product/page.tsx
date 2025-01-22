"use client";
import { FaSortDown } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function AllProducts() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar Toggle for Mobile */}
      <button
        className="md:hidden bg-blue-600 text-white p-3 m-2 rounded"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Left Sidebar */}
      <aside
        className={`${
          isSidebarVisible ? "block" : "hidden"
        } md:block w-full md:w-1/4 bg-white p-6 border-r`}
      >
        {/* New Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">New</h2>
          <div className="h-10 bg-gray-200 rounded flex items-center justify-center mt-4">
            <span className="text-lg font-medium text-gray-600">500</span>
          </div>
        </div>

        {/* Collections Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Collections</h2>
        <ul className="space-y-2 mb-6">
          {["Shoes", "Jackets", "Shirts", "Pants", "Accessories", "Sweaters", "Hats"].map(
            (item) => (
              <li
                key={item}
                className="h-10 bg-gray-200 rounded flex items-center justify-center"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Gender Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Gender</h2>
        <ul className="space-y-2 mb-6">
          {["Male", "Female"].map((gender) => (
            <li
              key={gender}
              className="h-10 bg-gray-200 rounded flex items-center justify-center"
            >
              {gender}
            </li>
          ))}
        </ul>

        {/* Boys and Girls Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">For</h2>
        <ul className="space-y-2 mb-6">
          {["Boys", "Girls"].map((group) => (
            <li
              key={group}
              className="h-10 bg-gray-200 rounded flex items-center justify-center"
            >
              {group}
            </li>
          ))}
        </ul>

        {/* Sort By Section */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Sort By</h2>
        <ul className="space-y-2">
          {["Price", "Unit"].map((sort) => (
            <li
              key={sort}
              className="h-10 bg-gray-200 rounded flex items-center justify-center"
            >
              {sort}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Filters and Sort By Icons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <p>Hide Filter</p>
            <div>
              <Image src="/hide.png" alt="Hide" width={24} height={24} />
            </div>
            <div className="flex items-center">
              <p className="mr-1">Sort by</p> <FaSortDown />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <a
              key={index}
              href="/product-details"
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition transform hover:scale-105"
            >
              {/* Placeholder for Product Image */}
              <div className="h-40 w-full bg-gray-200 rounded mb-4">
                <Image
                  src="/Rectanglee.png"
                  alt="Product"
                  width={160}
                  height={160}
                  className="rounded"
                />
              </div>

              {/* Just In */}
              <span className="text-sm text-brown-500 font-medium mb-2">Just In</span>

              {/* Product Name */}
              <h1 className="text-lg font-semibold mb-2">Product Name</h1>

              {/* Product Category */}
              <span className="text-sm text-gray-500 mb-2">Men&apos;s Shoes</span>

              {/* Color */}
              <span className="text-sm text-gray-600 mb-2">Color: 1</span>

              {/* Price */}
              <span className="text-lg font-bold text-gray-800">$100</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
