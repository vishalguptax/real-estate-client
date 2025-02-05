import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">

      {/* Navbar */}
      <nav className="flex items-center justify-start h-[12%] px-8 bg-transparent">
        {/* Company Logo and Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="EstateHub Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold">EstateHub</h1>
        </div>

        {/* Navigation Links */}
        <div className="ml-8 space-x-10">
          <Link to="/" className="text-black hover:text-gray-600">Home</Link>
          <Link to="/about" className="text-black hover:text-gray-600">About</Link>
          <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
          <Link to="/profile" className="text-black hover:text-gray-600">Profile</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className=" text-black text-center h-[8%] flex items-center justify-center">
        <p>&copy; {new Date().getFullYear()} EstateHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
