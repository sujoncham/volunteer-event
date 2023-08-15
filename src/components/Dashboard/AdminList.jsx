import { Link } from "react-router-dom";
import AllAdmin from "../../Shared/AllAdmin";
import img1 from "../../assets/images/childSupport.png";

const AdminList = () => {
  const [users] = AllAdmin();
  const url = `http://localhost:5000/`;
  console.log(users);
  return (
    <div className="min-h-screen bg-red-800 py-5">
      <div className="px-7 mb-5">
        <Link
          to={`/dashboard/adminCreate`}
          className="border-2 border-purple-300 px-3 py-2 rounded-md text-white"
        >
          create admin
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-gray-900">
            <tr className="text-white text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Name
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                Designation
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                status
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                role
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                {" "}
                Remark
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex w-10 h-10">
                      {user && user?.image && user.image[0] ? (
                        <img
                          className="w-10 h-10 object-cover rounded-full"
                          src={url + user.image[0]}
                          alt=""
                        />
                      ) : (
                        <img
                          className="w-10 h-10 object-cover rounded-full"
                          src={img1}
                          alt=""
                        />
                      )}
                    </div>
                    <div>
                      <p> {user.username} </p>
                      <p className="text-gray-500 text-sm font-semibold tracking-wide">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className=""> {user.profession}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center"> {user.role} </td>
                <td className="px-6 py-4 text-center">
                  <a
                    href="#"
                    className="text-purple-800 hover:underline border-2 border-purple-300 p1 rounded-sm"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-purple-800 hover:underline border-2 border-purple-300 p1 rounded-sm ml-2"
                  >
                    Del
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminList;
