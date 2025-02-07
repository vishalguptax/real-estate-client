import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div className="flex flex-col h-[100vh]  ">
      {/* Navbar */}
      <nav className="flex items-center justify-between h-[50px] px-8 bg-transparent">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="EstateHub Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold">EstateHub</h1>
        </div>

        <div className="hidden md:flex space-x-15">
          <Link to="/" className="text-black hover:text-gray-600">Home</Link>
          <Link to="/profile" className="text-black hover:text-gray-600">Profile</Link>
          <Link to="/singlepage" className="text-black hover:text-gray-600">Singlepage</Link>
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
              to="/profile"
              className="py-4 hover:scale-105 transition"
              onClick={() => setOpen(false)}
            >
              Profile
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
      <main className="bg-gray-100">
        <Outlet />
      </main>

     

      {/* Footer */}
      <footer className="text-black text-center flex items-center justify-center ">
        <p>&copy; {new Date().getFullYear()} EstateHub. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Layout;
