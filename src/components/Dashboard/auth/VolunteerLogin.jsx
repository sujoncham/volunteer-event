import axios from "axios";
import { useState } from "react";
import { FaEllo } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const VolunteerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/api/v1/volunteer/volunteerLogin", {
          email,
          password,
        })
        .then((data) => {
          if (data) {
            console.log("User login successfully!", data.data);
            localStorage.setItem("userId", data?.data?.id);
            localStorage.setItem("email", data?.data?.email);
            localStorage.setItem("username", data?.data?.username);
            localStorage.setItem("token", data?.data?.token);
            localStorage.setItem("role", data?.data?.role);

            navigate("/");
          } else {
            console.log("Registration failed:", data.message);
          }
        });
    } catch (error) {
      console.log("Error occurred during registration:", error);
    }
  };
  return (
    <div className="rounded-xl bg-white shadow-xl">
      <div className="px-5 py-5 flex justify-start items-center gap-5">
        <FaEllo size={50} />
        <h2 className="text-2xl text-cyan-900 font-bold">
          Sign in to unlock the <br /> best of Volunteer.
        </h2>
      </div>
      <div className="px-5 py-5">
        <form onSubmit={handleSubmit}>
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
          <div>
            <button
              type="submit"
              className="border-2 border-purple-400 px-3 py-2 rounded-md"
            >
              login
            </button>
          </div>
        </form>
      </div>

      <p className="mt-5 py-5 px-5">
        No account Yet? Please,{" "}
        <Link to="/volunteerRegister" className="text-blue-500">
          Register
        </Link>{" "}
        here
      </p>
    </div>
  );
};

export default VolunteerLogin;
