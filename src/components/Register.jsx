import axios from "axios";
import { useState } from "react";
import { FaEllo } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/userSignup",
        {
          username,
          email,
          password,
          role,
        }
      );
      console.log(response.data);
      // Handle success or display success message
    } catch (error) {
      console.error(error.response.data);
      // Handle error or display error message
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="px-5 py-5 flex justify-start items-center gap-5">
              <FaEllo size={50} />
              <h2 className="text-2xl text-cyan-900 font-bold">
                Sign in to unlock the <br /> best of Tailus.
              </h2>
            </div>
            <div className="px-5 py-5">
              <form onSubmit={handleSubmit} className="px-10">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 py-2 mt-5 border border-gray-300 rounded-md"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 mt-5 border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="password"
                  className="w-full px-3 py-2 mt-5 border border-gray-300 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="w-full px-3 py-2 mt-5 border border-gray-300 rounded-md"
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="eventor">Eventor</option>
                  <option value="volunteer">Volunteer</option>
                </select>

                <button
                  type="submit"
                  className="w-full px-3 py-2 mt-5 bg-purple-500 text-white border border-gray-300 rounded-md"
                >
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
