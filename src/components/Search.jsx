import React from "react";
import { useState } from "react";
const types = ["buy", "rent"];

export default function Search() {
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState({
    type: "buy",
    minPrice: 0,
    maxPrice: 1000000,
  });

  console.log("location >>", location);
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className=" w-full absolute bottom-0 md:bottom-10 px-4 z-999">
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl bg-black text-white shadow-md rounded-lg p-4 mx-auto">
        {/* Type Selection */}
        <div className="flex">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={`px-6 py-3 w-1/6 text-center border border-gray-400 ${
                query.type === type
                  ? "bg-yellow-400 text-black"
                  : "bg-black text-white"
              } first:rounded-l-lg last:rounded-r-lg`}
            >
              {type}
            </button>
          ))}
        </div>
        <form className="flex flex-col sm:flex-row flex-wrap gap-1 mt-1">
          <input
            type="text"
            name="location"
            value={query.location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City Location"
            className="flex-1 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-auto"
          />
          <input
            type="number"
            name="minPrice"
            onChange={(e) => setQuery(e.target.value)}
            min={0}
            max={10000000}
            placeholder="Min Price"
            className="flex-1 p-3 border text-gray-50 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-auto"
          />
          <input
            type="number"
            name="maxPrice"
            onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
            min={0}
            max={10000000}
            placeholder="Max Price"
            className="flex-1 p-3 text-gray-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg flex items-center justify-center transition w-full sm:w-auto">
            <img src="./search.png" alt="Search" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
}
