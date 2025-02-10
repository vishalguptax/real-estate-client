
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./pages/auth/ProtectedRoutes";
import ListItem from "./components/listIems/ListItem";
import SinglePage from "./pages/singlepage/singlepage";



function App() {
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path='/listItem' element={<ListItem />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="listItem/singlepage" element={<SinglePage />} />
      </Route>
    </Routes>

  );
}

export default App;