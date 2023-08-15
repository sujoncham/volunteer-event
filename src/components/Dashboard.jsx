import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-between">
        <div className="w-[20%] flex flex-col bg-gray-500 px-3">
          <Link
            className="bg-gray-600 py-3 px-3 rounded-md mt-3"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="bg-gray-600 py-3 px-3 rounded-md mt-3"
            to="/dashboard/adminList"
          >
            Admin List
          </Link>
          <Link
            className="bg-gray-600 py-3 px-3 rounded-md mt-3"
            to="/dashboard/eventorList"
          >
            Eventor List
          </Link>
          <Link
            className="bg-gray-600 py-3 px-3 rounded-md mt-3"
            to="/dashboard/eventList"
          >
            Event List
          </Link>
          <Link
            className="bg-gray-600 py-3 px-3 rounded-md mt-3"
            to="/dashboard/volunteerList"
          >
            Volunteer List
          </Link>
        </div>
        <div className="w-[80%] bg-blue-300 min-h-screen px-5 py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
