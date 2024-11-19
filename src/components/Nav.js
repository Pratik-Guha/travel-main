import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

const menuItem = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/discover",
    name: "Discover",
  },
  {
    path: "/place",
    name: "Place",
  },
];

const Nav = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-transparent">
      <h1 className="md:text-2xl text-xl font-medium md:font-semibold ">Travel Planner</h1>
      <nav className="flex gap-4">
        {menuItem.map((item) => (
          <Link key={item.name} to={item.path} className="text-base md:text-xl hover:underline">
            {item.name}
          </Link>
        ))}
      </nav>
      <div >
        <Link href="#login" className="text-base md:text-xl hover:underline">
          Login/Signup
        </Link>
      </div>
    </header>
  );
};

export default Nav;
