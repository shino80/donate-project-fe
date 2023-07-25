import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import food from "./salad.png";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 4,
    title: "Products From Donator",
    url: "/products",
  },

  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const { auth, setAuth } = useGlobalContext();

  const handleLogout = () => {
    setAuth(null);
  };
  return (
    <div className="h-24 flex justify-between items-center bg-white shadow-md">
      <Link className="flex items-center ml-4" to="/">
        <img src={food} alt="Logo" className="h-8 mr-2" />
        <span className="font-semibold text-2xl text-green-500 hover:text-green-600">
        <em className="font-custom">Donate Food </em>
        </span>
      </Link>

      <div className="flex space-x-4 mr-4">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            className="inline-block px-3 py-2 text-gray-800 hover:text-gray-900 font-medium"
          >
            {link.title}
          </Link>
        ))}
        {auth ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 border-none cursor-pointer text-white rounded"
          >
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 border-none cursor-pointer text-white rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
