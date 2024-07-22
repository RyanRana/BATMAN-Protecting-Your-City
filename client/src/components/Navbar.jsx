import React, { useContext } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">BRONX WATCH</p>
      </NavLink>
      <nav className="flex text-lg gap-5 font-medium">
        <NavLink
          to="/register_complaints"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Register Complaint
        </NavLink>
        <NavLink
          to="/community_forum"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Community Forum
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/user/dashboard"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Dashboard
            </NavLink>
            <button
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              onClick={() => {
                setLogIn(false);
                navigate("/signin");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Log In
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
