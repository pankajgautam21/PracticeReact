import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar bg-primary">
       <ul className="nav">
        <li className="nav-item  mx-3"><Link  className="text-decoration-none shadow-sm  text-white btn btn-outline-success" to="/Form">Home</Link></li>
        <li className="nav-item  mx-3 "><Link  className="text-decoration-none shadow-sm  text-white btn btn-outline-success" to="/About">About</Link></li>
        <li className="nav-item  mx-3 "><Link  className="text-decoration-none shadow-sm  text-white btn btn-outline-warning" to="/Page">Card</Link></li>
       </ul>
    </div>
  );
}
