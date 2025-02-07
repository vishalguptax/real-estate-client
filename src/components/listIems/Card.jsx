
import React from "react";

const Card = ({ item }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300 mt-1">
      {/* Left Side - Image */}
      <div className="w-1/3">
        <img
          src={item?.images[0]}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Details */}
      <div className="w-2/3 p-5 flex flex-col justify-between">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          <a to={`/${item.id}`} className="hover:text-blue-600">
            {item.title}
          </a>
        </h2>

        {/* Address */}
        <p className="text-sm text-gray-600 flex items-center gap-2">
          <img src="/pin.png" alt="location" className="w-4 h-4" />
          <span>{item.address}</span>
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-blue-500">${item.price}</p>

        {/* Features (Bedrooms & Bathrooms) */}
        <div className="flex gap-5 mt-3">
          <div className="flex items-center gap-2 text-gray-600">
            <img src="/bed.png" alt="bedroom" className="w-5 h-5" />
            <span>{item.bedroom} Bedroom</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <img src="/bath.png" alt="bathroom" className="w-5 h-5" />
            <span>{item.bathroom} Bathroom</span>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <div className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
              <img src="/save.png" alt="Save" className="w-5 h-5" />
            </div>
            <div className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
              <img src="/chat.png" alt="Chat" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

