import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import SinglePage from "./pages/singlepage/singlepage";
import ListItem from "./components/listIems/ListItem";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singlepage" element={<SinglePage />} />
        <Route path="/list" element={<ListItem />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
