import { createContext, useState } from "react";
import { listData } from "../lib/dummy";

const DataContext = createContext(null);

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [data, setData] = useState(listData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export { DataContext };
