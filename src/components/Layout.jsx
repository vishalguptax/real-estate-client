import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/AuthContext";
import NavbarButton from "./reusable/NavbarButton";

const Layout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between h-[60px] z-999 px-8 bg-gray-200">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="EstateHub Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold">EstateHub</h1>
        </div>

        <div className="hidden md:flex space-x-15">
          <Link
            to="/"
            className="link-bg"
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() =>
              alert(
                "About page is under construction. We are redirecting you to home page."
              )
            }
            className="link-bg"
          >
            About
          </Link>
          <Link
            to="/"
            className="link-bg"
            onClick={() =>
              alert(
                "About page is under construction. We are redirecting you to home page."
              )
            }
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4 font-xl">
              <NavbarButton
                className="navbar-btn"
                onClick={() => navigate("/profile")}
              >
                Profile
              </NavbarButton>
              <NavbarButton
                className="navbar-btn"
                onClick={() => {
                  navigate("/login");
                  logout();
                }}
              >
                Sign Out
              </NavbarButton>
            </div>
          ) : (
            <>
              <NavbarButton
                className="btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </NavbarButton>
              <NavbarButton
                className="btn"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </NavbarButton>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="sm:block lg:hidden">
          <button onClick={() => setOpen(!open)}>
            <img src="/menu.png" alt="Menu" className="w-9 h-9 cursor-pointer" />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gray-200 z-999 text-black flex flex-col items-center justify-center text-lg transition-transform transform translate-x-0">
          <button
            className="absolute top-5 right-5 text-black text-3xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <Link
            to="/"
            className="navbar-btn2"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="navbar-btn2"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="navbar-btn2"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          {user ? (
            <>
              <Link
                to="/profile"
                className="dropdown-bg"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/login"
                className="dropdown-bg"
                onClick={logout}
              >
                Sign out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="dropdown-bg"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="dropdown-bg"
                onClick={() => setOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      )}

      {/* Main Content */}
      <main className="h-[calc(100vh-60px)] bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
