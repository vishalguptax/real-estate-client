import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login";
import SinglePage from "./pages/singlepage/singlepage";



 function App() {
   return (
     <Router>
      <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singlepage" element={<SinglePage/>}/>
          </Route>
        </Routes>
      </>
    </Router>
   )

}

 export default App;

