import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Register from "./pages/auth/Register.jsx"
import Login from "./pages/auth/Login.jsx";
import ProtectedRoutes from "./pages/auth/ProtectedRoutes.jsx";
import { AuthProvider } from "./pages/auth/AuthContext.jsx";

function App() {
  return (
    <Router>
    <AuthProvider>
      <>
        <Routes>
          <Route element={<Layout />}>
            <Route element ={<ProtectedRoutes/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
            
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </>
    </AuthProvider>
    </Router>
  );
}

export default App;
