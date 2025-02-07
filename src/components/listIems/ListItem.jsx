import React from "react";
import { listData } from "../lib/dummy";
import Filter from "./Filter";
import Card from "./Card";
import Map from './Map';

const ListItem = () => {
  const data = listData;

  return (
    <div className="fixed flex justify-center items-center h-screen w-screen ">
      <div className="flex w-1/2 h-full gap-6 bg-amber-50 pl-3">
        <div className="">
          <Filter />
         
        </div>
      </div>
      <div className="w-1/2 h-full bg-purple-500 p-4 shadow-lg rounded-lg flex items-center justify-center">
         <Map/>
      </div>
    </div>
  );
};

export default ListItem;
