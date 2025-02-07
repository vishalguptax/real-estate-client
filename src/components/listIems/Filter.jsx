import React from "react";
import { useState } from "react";
import { listData } from "../lib/dummy";
import Card from "./Card";

const Filter = () => {
  const data = listData;
  const [enterLocation, setEnterLocation] = useState("");
  const [filteredData, setFiltereData] = useState(data);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setEnterLocation(e.target.value);
  };

  const searchResult = () => {
    const result = data.filter(
      (item) => item.address.toLowerCase() == enterLocation.toLocaleLowerCase()
    );
    const result2 = data.filter((item) => item);
    if (result.length > 0) {
      {
        result?.map((item) => setFiltereData(result));
      }
    } else {
      alert("Data not found");
    }
  };

  return (
    <div className=" h-full">
      <div className="filter bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-700">
            Search results for <b className="text-black">London</b>
          </h1>
        </div>

        {/* Location Input */}
        <div className="mb-4">
          <label htmlFor="city" className="text-sm font-medium text-gray-600">
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="item text-sm">
            <label htmlFor="type" className="block text-gray-600 font-medium">
              Type
            </label>
            <select
              name="type"
              id="type"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            >
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div className="item text-sm">
            <label
              htmlFor="property"
              className="block text-gray-600 font-medium"
            >
              Property
            </label>
            <select
              name="property"
              id="property"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div className="item text-sm">
            <label
              htmlFor="minPrice"
              className="block text-gray-600 font-medium"
            >
              Min Price
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Any"
              min="0"
              max="1200"
              value={minPrice}
              onChange={(e) => {
                e.preventDefault();
                setMinPrice(e.target.value);
              }}
              onKeyDown={(e) => e.key === "-"  && e.preventDefault()}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="item text-sm">
            <label
              htmlFor="maxPrice"
              className="block text-gray-600 font-medium"
            >
              Max Price
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Any"
              value={maxPrice}
              onChange={(e) => {
                e.preventDefault();
                setMaxPrice(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={searchResult}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center w-full transition"
            >
              <img src="/search.png" alt="Search" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto space-y-4">
        {filteredData?.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Filter;
