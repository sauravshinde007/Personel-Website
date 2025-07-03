import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", { username, password });
      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary text-white">
      <form className="bg-black-100 p-8 rounded-lg shadow-lg" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        <button
          type="submit"
          className="w-full py-2 bg-tertiary hover:bg-purple-700 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
