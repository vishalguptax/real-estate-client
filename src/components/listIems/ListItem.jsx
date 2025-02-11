import Filter from "./Filter";
import Map from "./Map";

const ListItem = () => {
  return (
    <div className="md:flex flex-col  md:flex-row h-[calc(100vh-100px)] overflow-y-scroll custom-scrollbar">
      <div className="flex-3 md:h-full  overflow-y-auto p-4">
        <div className="flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-[50px] h-[100%] pb-1.5">
          <Filter />
        </div>
      </div>

      {/* mapContainer     */}
      <div className="flex-2 h-1/2 md:h-full  bg-[#fcf5f3]  ">
        <div className="flex-[2] justify-center h-full text-center  bg-[#fcf5f3] md:flex-1  ">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
