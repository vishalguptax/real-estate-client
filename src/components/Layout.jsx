import React, { useState } from "react";

function Layout() {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div className="flex items-center justify-between h-[50px] p-4 bg-black text-white shadow-md ">
      <div className="left flex gap-4 items-center gap-[50px] ">
        <a href="/" className="flex items-center gap-[10px]">
          <img src="/logo.svg" alt="" className="w-[28px]" />
          <span className="hidden md:inline">Real Estate</span>
        </a>
        <a href="/" className="hidden sm:inline hover:scale-105 transition">
          Home
        </a>
        <a href="/" className="hidden sm:inline hover:scale-105 transition">
          About
        </a>
        <a href="/" className="hidden sm:inline hover:scale-105 transition">
          Contact
        </a>
      </div>

      < div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4 font-bold">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="hidden sm:inline">John Doe</span>
            <a href="/" className="relative px-4 py-2 bg-yellow-400 rounded-lg">
              <span>Profile</span>
            </a>
          </div>
        ) : (
          <>
            <a href="/" className="px-4 py-2 hover:scale-105 transition display hidden md:block">
              Sign in
            </a>
            <a
              href="/"
              className="px-4 py-2 bg-yellow-400 rounded-lg hover:scale-105 transition hidden md:block"
            >
              Sign up
            </a>
          </>
        )}
      
      
        <div className="">
          <button onClick={() => setOpen(!open)}>
            <img src="/menu.png" alt="" className="w-9 h-9" />
          </button>
          </div>
          </div>
          {open && (
          <div className="absolute top-0 right-0 w-1/2 h-screen bg-black text-white flex flex-col items-center justify-center text-lg transition-transform transform translate-x-0">
            <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setOpen(false)}>×</button>
            <a
              href="/"
              className="py-4 hover:scale-105 transition "
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="/"
              className="py-4 hover:scale-105 transition"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="/"
              className="py-4 hover:scale-105 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a
              href="/"
              className="py-4 bg-yellow-400 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Sign up
            </a>
          </div>
        
      )}
    </div>
  );
}

export default Layout;
