
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/AuthContext";
import NavbarButton from "./reusable/NavbarButton";

const Layout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between h-[60px] px-8 bg-transparent">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="EstateHub Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold">EstateHub</h1>
        </div>

        <div className="hidden md:flex space-x-15">
          <Link to="/" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link to="/" className="text-black hover:text-gray-600">
            About
          </Link>
          <Link to="/contact" className="text-black hover:text-gray-600">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4 font-bold">

              <NavbarButton
                className=" relative px-4 py-2 bg-yellow-400 rounded-lg hover:scale-105 cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                Profile
              </NavbarButton>

              <NavbarButton
                className=" relative px-4 py-2 bg-yellow-400 rounded-lg hover:scale-105 cursor-pointer"
                onClick={() => { navigate("/login"); logout(); }}
              >
                Sign Out
              </NavbarButton>

            </div>



          ) : (
            <>

              <NavbarButton
                className="px-4 py-2 hover:scale-105 bg-yellow-400 rounded-lg cursor-pointer transition hidden md:block"
                onClick={() => { navigate("/login") }}
              >
                Sign In
              </NavbarButton>
              <NavbarButton
                className="px-4 py-2 hover:scale-105 bg-yellow-400 rounded-lg cursor-pointer transition hidden md:block"
                onClick={() => { navigate("/register") }}
              >
                Sign Up
              </NavbarButton>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden ">
          <button onClick={() => setOpen(!open)}>
            <img src="/menu.png" alt="Menu" className="w-9 h-9" />
          </button>
        </div>

        {
          open && (
            <div className="absolute top-0 right-0 w-1/2 h-screen z-999 bg-black text-white flex flex-col items-center justify-center text-lg transition-transform transform translate-x-0">
              <button
                className="absolute top-5 right-5 text-white text-3xl"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <Link
                to="/"
                className="py-4 hover:scale-105 transition"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="py-4 hover:scale-105 transition"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="py-4 hover:scale-105 transition"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/signup"
                className="py-4 bg-yellow-400 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Sign up
              </Link>
            </div>
          )
        }
      </nav>

      {/* Main Content */}
      <main className=" h-[calc(100vh-150px)] overflow-hidden bg-gray-100 ">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-black text-center h-[50px] flex items-center justify-center " >
        <p>&copy; {new Date().getFullYear()} EstateHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

