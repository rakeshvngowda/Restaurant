import React from "react";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="signup">
      <h3>Sign Up</h3>
      <label>Email:</label>
      <input 
      type="email" 
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
      {/* Password */}
      <label>Password:</label>
      <input 
      type="password" 
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />

    <button>Sign Up</button>

    </form>
  );
}
