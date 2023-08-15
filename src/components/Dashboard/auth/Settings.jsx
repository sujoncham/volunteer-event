import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Logout from "../../../Shared/Logout";
import VolunteerEvent from "../../../Shared/VolunteerEvent";

const Settings = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fullname, email, role } = VolunteerEvent();
  const roleRole =
    role === "eventor" ? "eventor" : role === "volunteer" ? "volunteer" : "";
  // console.log(user);
  const deleteHandle = async (id) => {
    const confirmDelete = window.confirm("are you want to delete you account?");
    if (confirmDelete) {
      try {
        const result = await axios.delete(
          `http://localhost:5000/api/v1/${roleRole}/${roleRole}Delete/${id}`
        );
        if (result.status) {
          Logout();
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="container mx-auto px-5">
      <h1>Settings {id}</h1>
      <div>
        <div className="flex items-center gap-10 bg-gray-400 px-10 py-10">
          <h1>Full name</h1>
          <p>{fullname}</p>
        </div>
        <div className="flex items-center gap-10 bg-gray-400 px-10 py-10 mt-5">
          <h1>email</h1>
          <p>{email}</p>
        </div>
        <div className="flex items-center gap-10 bg-gray-400 px-10 py-10 mt-5">
          <h1>Account Delete</h1>
          <button
            onClick={() => deleteHandle(id)}
            className="border-2 border-purple-400 px-3 py2 rounded-md bg-yellow-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
