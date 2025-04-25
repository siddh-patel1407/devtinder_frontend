import React, { useState } from "react";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelReq = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      },{withCredentials : true});
    //   alert(res.data); // success message from backend
    } catch (error) {
      console.error(error);
      alert(error.response?.data || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-2xl shadow-md p-8 w-full max-w-sm">
        <h2 className="text-white text-3xl font-semibold text-center mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-1" htmlFor="email">
            Email ID
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-300 text-sm mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          onClick={handelReq}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
