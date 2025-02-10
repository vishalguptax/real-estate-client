import Filter from "./Filter";
import Map from "./Map";


const ListItem = () => {
  return (
    <div className="flex flex-col  md:flex-row h-screen md:overflow-scroll">
      <div className="flex-[3] h-full md:flex-[1] overflow-auto p-4">
        <div className="flex flex-col gap-6 overflow- pr-[50px] h-[100%] pb-1.5">
          <Filter />
        </div>
      </div>
      <div className="flex-[2] justify-center h-full text-center m-10 bg-[#fcf5f3] md:flex-1  ">
        <Map />
      </div>
    </div>
  );
};

export default ListItem;
