import Filter from "./Filter";
import Map from "./Map";
import { useLocation } from "react-router-dom";


const ListItem = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get("type");
  const locationFilter = queryParams.get("location");
  const minPrice = queryParams.get("minPrice");
  const maxPrice = queryParams.get("maxPrice");

  console.log("Filters Received:", { type, locationFilter, minPrice, maxPrice });

  return (
    <div className="md:flex flex-col  md:flex-row h-[calc(100vh-100px)] overflow-scroll custom-scrollbar z-10">
      <div className="flex-[3] h-full md:flex-[1] overflow-auto p-4">
        <div className="flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-[50px] h-[100%] pb-1.5">
          <Filter type={type} location={locationFilter} minPrice={minPrice} maxPrice={maxPrice}/>
        </div>
      </div>

      {/* mapContainer     */}
      <div className="flex-[2]  bg-[#fcf5f3] md:flex-1 ">
      <div className="flex-[2] justify-center h-full text-center  bg-[#fcf5f3] md:flex-1  ">
        <Map />
      </div>
      </div>
    </div>
  );
};

export default ListItem;
