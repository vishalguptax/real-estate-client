import React from "react";
import { listData } from "../lib/dummy";
import Filter from "./Filter";
import Card from "./Card";
import Map from './Map';

const listItem = () => {
  const data = listData;

  return (
    <div className="fixed flex justify-center items-center h-screen w-screen ">
      <div className="flex w-1/2 h-full gap-6 bg-amber-50 pl-3">
        <div className="">
          <Filter />
          <div className="max-h-[500px] overflow-y-auto space-y-4">
            {data?.map((item) => (
              <Card key={item.id} item={item}></Card>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-purple-500 p-4 shadow-lg rounded-lg flex items-center justify-center">
         <Map/>
      </div>
    </div>
  );
};

export default listItem;
