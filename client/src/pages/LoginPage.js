import React, { useState } from "react";
import { login } from "../services/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await login({ email, password });
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={submit}>Login</button>
    </div>
  );
};

export default LoginPage;