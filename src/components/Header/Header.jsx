import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mx-10 mt-5">
      <div className="navbar bg-emerald-300 px-8">
        <div className="flex-1">
          <a className="text-2xl">Abacus convention center</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-10 ">
            <Link className="font-semibold hover:text-orange-400" to="/">Home</Link>
            <Link className="font-semibold hover:text-orange-400" to="/login">Login</Link>
            <Link className="font-semibold hover:text-orange-400" to="/register">Sing up</Link>
            <Link className="font-semibold hover:text-orange-400" to="/blog">Blog</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
