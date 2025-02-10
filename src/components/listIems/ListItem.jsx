import Filter from "./Filter";
import Map from "./Map";


const ListItem = () => {
  return (
    <div className="md:flex flex-col  md:flex-row h-[calc(100vh-100px)] overflow-scroll custom-scrollbar z-10">
      <div className="flex-[3] h-full md:flex-[1] overflow-auto p-4">
        <div className="flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-[50px] h-[100%] pb-1.5">
          <Filter />
        </div>
      </div>
      <div className="flex-[2] justify-center h-full text-center m-10 bg-[#fcf5f3] md:flex-1 ">
        <Map />
      </div>
    </div>
  );
};

export default ListItem;
