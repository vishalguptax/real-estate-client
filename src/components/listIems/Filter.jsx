
import { useState } from "react";
import { useContext } from 'react';
import { DataContext }  from './DataContext'
import Card from "./Card";

const Filter = () => {
  const { data} = useContext(DataContext);
  const[minValue, setMinValue] = useState(0);
  const[maxValue, setMaxValue] = useState(0);
  const[bedRoom, setBedRoom] = useState(0);
  const [city, setCity] = useState("");
  const [filteredData, setFilteredData] = useState([...data])

  const searchResult = () => {
     let result = [...data];

     if( city.trim() !== "" ) {
        result = result.filter((item) =>
          item.address.toLowerCase().includes(city.toLowerCase())
      );
     }

     if(minValue > 0) {
        result = result.filter((item) => item.price >= minValue);
     }

     if (maxValue > minValue && maxValue > 0) {
      result = result.filter((item) => item.price <= maxValue);
    }

    if (bedRoom > 0) {
      result = result.filter((item) => item.bedroom === bedRoom);
    }

    if (result.length === 0) {
      alert("No results found");
    }

    setFilteredData(result);
  };
  



  return (
    <div className="flex flex-col gap-3 p-4">
      <h1 className="text-xl font-light">
        Search result for <b>London</b>
      </h1>

      {/* Location Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="text-xs">Location</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          placeholder="City Location"
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
          onChange={(e) => {
             e.preventDefault();
             setCity(e.target.value)
          }}
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Type */}
        <div className="flex flex-col gap-1">
          <label htmlFor="type" className="text-xs">Type</label>
          <select id="type" name="type" className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* Property */}
        <div className="flex flex-col gap-1">
          <label htmlFor="property" className="text-xs">Property</label>
          <select id="property" name="property" className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>

        {/* Min Price */}
        <div className="flex flex-col gap-1">
          <label htmlFor="minPrice" className="text-xs">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
            value={minValue}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
            onChange = { (e) => { 
               setMinValue(Number(e.target.value));
            }
            }
          />
        </div>

        {/* Max Price */}
        <div className="flex flex-col gap-1">
          <label htmlFor="maxPrice" className="text-xs">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
            value={minValue}  
            max = {100000}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
            onChange = {(e) => {
               setMaxValue(Number(e.target.value));
            }}
          />
        </div>

        {/* Bedroom */}
        <div className="flex flex-col gap-1">
          <label htmlFor="bedroom" className="text-xs">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="Any"
            value={bedRoom}
            onChange={(e) => {
              setBedRoom(Number(e.target.value));
            }}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Search Button */}
        <button onClick = {searchResult}className="w-full p-2 bg-yellow-400 rounded-lg flex justify-center items-center hover:bg-yellow-500 transition cursor-pointer">
          <img src="/search.png" alt="Search" className="w-6 h-6" />
        </button>
      </div>

      <div className="pb-10">
          {filteredData.length > 0 ? (
             filteredData.map((item) => <Card key = {item.id} item={item}/>)
          ) : (
            <p className="text-sm text-gray-500">No result found.</p>
          )}
      </div>
    </div>
  );
};

export default Filter;
