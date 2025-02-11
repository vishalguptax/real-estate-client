import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow mb-3 my-3">
      {/* Image Container */}
      <Link to={`singlepage`} className="w-full md:w-1/3 h-[200px]">
        <img
          src={item?.images}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      {/* Text Container */}
      <div className="flex flex-col justify-between w-full md:w-2/3 gap-3">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-700 transition-all duration-300 hover:text-black">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        {/* Address */}
        <p className="text-sm flex items-center gap-2 text-gray-500">
          <img src="/pin.png" alt="Location" className="w-4 h-4" />
          <span>{item.address}</span>
        </p>

        {/* Price */}
        <p className="text-lg font-semibold bg-yellow-100 px-3 py-1 rounded-lg w-fit">
          ${item.price}
        </p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          {/* Features */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-2 bg-white p-2 border rounded-md">
              <img src="/bed.png" alt="Bed" className="w-5 h-5" />
              <span>{item.bedroom} Bedroom</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
              <img src="/save.png" alt="Save" className="w-5 h-5" />
            </div>
            <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
              <img src="/chat.png" alt="Chat" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
