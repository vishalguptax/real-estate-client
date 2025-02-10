
import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Register from "./pages/auth/Register.jsx"
import Login from "./pages/auth/Login.jsx";
import ProtectedRoutes from "./pages/auth/ProtectedRoutes.jsx";
import ListItem from "./components/listIems/ListItem.jsx";


function App() {
  return (
    
        <Routes>
          <Route element={<Layout />}>
            <Route element ={<ProtectedRoutes/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path='/listItem' element={<ListItem/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
     
  );
}

export default App;