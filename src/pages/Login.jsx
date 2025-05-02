import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import useAuthStore from "../stores/authStore";


export default function Login() {
    const navigate = useNavigate();
    const {setToken, setUser} = useAuthStore ((state) => state);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response =  await api.post ("/api/auth/login",{
            email,
            password
        });
        const {accessToken, user} = response.data;
        setToken(accessToken);
        setUser(user);
        navigate("/")
        
    } catch (error) {
        console.error(
            "Register Failed",
            error.response?.data?.message || error.message
        );           
    }
    
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="w-80 space-y-4 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <button
          type="submit"
          className="bg-orange-500 text-white p-2 w-full rounded hover:bg-orange-600 transition"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
}
