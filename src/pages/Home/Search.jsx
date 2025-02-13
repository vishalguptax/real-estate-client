import { useState } from "react";
import { useNavigate } from "react-router-dom";
const types = ["buy", "rent"];

export default function Search() {
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState({
    type: "buy",
    minPrice: 0,
    maxPrice: 1000000,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();

    const searchParams = new URLSearchParams({
      type: query.type,
      location,
      minPrice: query.minPrice,
      maxPrice: query.maxPrice,
    }).toString();
    navigate(`/ListItem?${searchParams}`);
  };
  return (
    <div className=" w-[100%] absolute bottom-[30%] md:bottom-[10%] px-4 z-9 m-auto h-[30%]">
      <div className="w-[70%] md:max-w-xl lg:max-w-2xl bg-black/60 text-white shadow-md rounded-lg p-4 mx-auto ">
        {/* Type Selection */}
        <div className="flex">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={`px-3 py-3 md:w-1/6 text-center border border-gray-400 cursor-pointer ${
                query.type === type
                  ? "bg-primary-foreground lg:bg-primary text-white shadow-lg"
                  : "bg-transparent border-gray-400 hover:bg-primary-foreground/40 lg:hover:bg-black/50"
              } first:rounded-l-lg last:rounded-r-lg `}
            >
              {type}
            </button>
          ))}
        </div>
        <form className="flex flex-col sm:flex-row flex-wrap gap-1 mt-1">
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City Location"
            className="search-input"
          />
          <input
            type="number"
            name="minPrice"
            onChange={(e) => {
              setQuery({...query,minPrice: e.target.value});
            }}
            min={0}
            max={10000000}
            placeholder="Min Price"
            className="search-input"
          />
          <input
            type="number"
            name="maxPrice"
            onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
            min={0}
            max={10000000}
            placeholder="Max Price"
            className="search-input"
          />

          <button
            type="button"
            onClick={handleSearch}
            className="search-button"
          >
            <img src="./search.png" alt="Search" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
}
