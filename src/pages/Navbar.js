import React,{useEffect} from "react";
import { Link  } from "react-router-dom";
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
  }
 ,

  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },

  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  }

];

const Navbar = () => {
 
  
  return (
    <div className="h-24 flex justify-between items-center bg-white">
    <Link className="font-semibold text-2xl text-gray-800 hover:text-gray-900 ml-4" to="/">
  Donate With B
</Link>

    <div className="flex space-x-4">
      {links.map((link) => (
        <Link key={link.id} to={link.url} className="inline-block px-3 py-2 text-gray-800 hover:text-gray-900">
          {link.title}
        </Link>
      ))}
      <Link to="/login">
        <button  className="mr-4 px-4 py-2 bg-green-500 hover:bg-green-600 border-none cursor-pointer text-white rounded">
          Login
        </button>
      </Link>
     
    </div>
  </div>
  
  
  );
};

export default Navbar;
