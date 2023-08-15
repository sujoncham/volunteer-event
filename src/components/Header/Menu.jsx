/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../Shared/Logout";
import VolunteerEvent from "../../Shared/VolunteerEvent";

const Menu = () => {
  const [open, setOpen] = useState(true);
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  const user = VolunteerEvent();

  const navigate = useNavigate();
  const url = `http://localhost:5000/`;
  const handleDelete = () => {
    Logout();
    setOpen(true);
    navigate("/");
  };

  const handleLinkClick = () => {
    setOpen(true);
  };

  return (
    <div className="px-2 py-3 space-y-2 font-medium text-slate-700 md:flex lg:flex">
      <div className="md:flex lg:flex justify-between items-center">
        <div className="flex">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Dashboard
          </Link>

          <Link
            to="/volunteer"
            className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Volunteer
          </Link>

          <Link
            to={`/${userId}/events`}
            className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Events
          </Link>
        </div>
        <div className="flex">
          {!userId ? (
            <Link
              to="/welcomeLogin"
              className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Signin
            </Link>
          ) : (
            <div className="flex items-center relative">
              <button
                className="px-2 ml-3 rounded-md border-2 border-purple-300"
                onClick={() => setOpen(!open)}
              >
                <div className="flex justify-start items-center gap-1">
                  {/* <img className="w-10 h-10 rounded-full" src={url} alt="" /> */}
                  {user && user?.image && user.image[0] ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={url + user.image[0]}
                      alt=""
                    />
                  ) : (
                    <p>No</p>
                  )}
                  <p>{username ? username : "no name"}</p>
                </div>
              </button>
              {!open && (
                <div className="absolute top-14 right-0 z-50 bg-gray-500 px-2 py-2 border-2 border-pink-500">
                  {role === "volunteer" && role === "eventor" ? (
                    <Link
                      to={`/${userId}/profile`}
                      onClick={handleLinkClick}
                      className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Profile
                    </Link>
                  ) : (
                    <Link
                      to={`/${userId}/eventorProfile`}
                      onClick={handleLinkClick}
                      className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Profile
                    </Link>
                  )}
                  <Link
                    to={`/${userId}/setting`}
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Setting
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
