import { createContext, useContext , useState} from 'react'
import { listData } from '../lib/dummy';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [data, setData] = useState(listData)
    return (
        <DataContext.Provider value = {{data, setData}}>
           {children}
        </DataContext.Provider>
    )
}

export default DataProvider
export {DataContext};