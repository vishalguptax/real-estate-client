import Filter from "./Filter";
import Map from "./Map";
// import { useContext } from "react";
// import { DataContext } from "./DataContext";

const ListItem = () => {
  //   const { data } = useContext(DataContext);
  return (
    //listPage
    <div className="flex flex-col  md:flex-row h-screen md:overflow-scroll">
      {/* //listContainer */}
      <div className="flex-[3] h-full md:flex-[1] overflow-auto p-4">
        {/* wrapper */}
        <div className="flex flex-col gap-6 overflow- pr-[50px] h-[100%] pb-1.5">
          <Filter />
          {/* {data?.map(item=>(
                    <Card key={item.id} item={item}/>
                 ))} */}
        </div>
      </div>
      {/* mapContainer     */}
      <div className="flex-[2]  bg-[#fcf5f3] md:flex-1 hidden md:block">
        <Map />
      </div>
    </div>
  );
};

export default ListItem;
