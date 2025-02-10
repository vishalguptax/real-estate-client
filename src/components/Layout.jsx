import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../pages/auth/AuthContext";

const Layout = () => {
  const [open, setOpen] = useState(false);
  // const [user, setUser] = useState(null);
  const {user, logout} = useAuth();

  // useEffect(()=>{
  //   const storedUser = JSON.parse(localStorage.getItem("loggedInUser"))
  //   setUser(storedUser)
  // },[user])

  // const handleLogout =()=>{
  //   localStorage.removeItem("loggedInUser")
  //   setUser(null)
  // }

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
          <Link to="/about" className="text-black hover:text-gray-600">
            About
          </Link>
          <Link to="/contact" className="text-black hover:text-gray-600">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4 font-bold">
              <Link
                to="/profile"
                className="relative px-4 py-2 bg-yellow-400 rounded-lg"
              >
                Profile
              </Link>
              <Link
                to="/login"
                className="relative px-4 py-2 bg-yellow-400 rounded-lg"
                // onClick={handleLogout}
                onClick={logout}
              >
                Sign out
              </Link>
            </div>
            
            

          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 hover:scale-105 transition hidden md:block"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-yellow-400 rounded-lg hover:scale-105 transition hidden md:block"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            <img src="/public/menu.png" alt="Menu" className="w-9 h-9" />
          </button>
        </div>

        {open && (
          <div className="absolute top-0 right-0 w-1/2 h-screen bg-black text-white flex flex-col items-center justify-center text-lg transition-transform transform translate-x-0">
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
        )}
      </nav>

      {/* Main Content */}
      <main className=" h-[calc(100vh-150px)] overflow-hidden bg-gray-100 ">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-black text-center h-[50px] flex items-center justify-center ">
        <p>&copy; {new Date().getFullYear()} EstateHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
