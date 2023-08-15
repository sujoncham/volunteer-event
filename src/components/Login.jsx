import axios from "axios";
import { useState } from "react";
import { FaEllo, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/api/v1/user/login", { email, password })
        .then((data) => {
          if (data) {
            console.log("User login successfully!", data.data);
            localStorage.setItem("userId", data?.data?.email);
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
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="px-5 py-5 flex justify-start items-center gap-5">
              <FaEllo size={50} />
              <h2 className="text-2xl text-cyan-900 font-bold">
                Sign in to unlock the <br /> best of Tailus.
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
            <div className="py-1">
              <h1 className="font-bold text-xl text-center">Or</h1>
            </div>
            <div className="px-10 py-1">
              <div className="mt-5 grid space-y-4">
                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <FaGoogle size={30} />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>

                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <FaFacebookF size={30} />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Facebook
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <p className="mt-5 py-5 px-5">
              No account Yet? Please,{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
