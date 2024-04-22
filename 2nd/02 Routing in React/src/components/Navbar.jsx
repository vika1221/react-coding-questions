import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href='/'>Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href='/about'>About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* <a href='/about'>About</a> */}
          <Link to="/user">User List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
