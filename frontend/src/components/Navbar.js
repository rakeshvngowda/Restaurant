import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>Dishes</h1>
      </Link>
      <div>
        <span></span>
        <button>Log Out</button>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
