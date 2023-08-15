import { useState } from "react";
import { Link } from "react-router-dom";

const AdminRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/admin/adminSignup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (response.ok) {
        console.log("User registered successfully!");
        // navigate("/login");
      } else {
        const data = await response.json();
        console.log("Registration failed:", data.message);
      }
    } catch (error) {
      console.log("Error occurred during registration:", error);
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Form</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            User Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>
        <button
          className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          type="submit"
        >
          Register
        </button>
      </form>
      <p className="font-bold mb-6 text-center">
        Already have an account? Please,{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>{" "}
        here
      </p>
    </div>
  );
};

export default AdminRegister;
