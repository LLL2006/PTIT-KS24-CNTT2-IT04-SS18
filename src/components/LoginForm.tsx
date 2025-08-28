import React, { useState, useCallback } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
        e.preventDefault();
        console.log({email, password});    
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <div>
        <label>Email</label> <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Password</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
  )
}
