import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "../../../assets/images/babySit.png";
import VolunteerEdit from "./VolunteerEdit";
const Profile = () => {
  const { id } = useParams();
  const role = localStorage.getItem("role");
  const [show, setShow] = useState(true);
  const roleRole =
    role === "eventor" ? "eventor" : role === "volunteer" ? "volunteer" : "";

  const [user, setUser] = useState({});
  const url = `http://localhost:5000/`;
  // console.log(user);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/${roleRole}/${id}/profile`)
        .then((data) => {
          console.log(data.data.blog);
          setUser(data?.data?.blog);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [id, roleRole]);

  return (
    <div className="relative">
      <div className="container mx-auto px-10 py-5 flex justify-start gap-5">
        <div className="w-[30%] bg-blue-300 min-h-screen">
          <div>
            <div className="flex flex-col items-center gap-5">
              <div className="w-56 h-56 rounded-full border-2 border-purple-500">
                {user && user?.image && user.image[0] ? (
                  <img
                    className="w-full h-full rounded-full"
                    src={url + user.image[0]}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-full h-full rounded-full"
                    src={img1}
                    alt=""
                  />
                )}
              </div>

              <p className="text-gray-900">{user.username}</p>
              <p className="text-gray-900">{user.fullname || ""}</p>
              <p className="text-gray-900">{user.email}</p>
            </div>
            <div className="h-[150px] m-3 px-2 bg-gray-500">
              <p>Address</p>
              <address>{user.address}</address>
            </div>

            <div className="h-[150px] m-3 px-2 bg-gray-500">
              <p>Other Infonmaitons</p>
              <p>Hobby: {user.hobby}</p>
              <p>Interests: {user.interests || "Football, Cricket"}</p>
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <button
            onClick={() => setShow(!show)}
            className="border-2 border-gray-200 px-1 py-1 rounded-md"
          >
            edit
          </button>
          <div className="m-3 px-2">
            <h1 className="block text-base font-medium text-[#07074D]">
              Educational Qualification
            </h1>
            <p>{user.education}</p>
          </div>

          <div className="m-3 px-2">
            <h1 className="block text-base font-medium text-[#07074D]">
              Aditional Skills
            </h1>
            <p>{user.skills}</p>
          </div>
          <div className="h-[150px] m-3 px-2">
            <h1 className="block text-base font-medium text-[#07074D]">
              Description
            </h1>
            <p>{user.description}</p>
          </div>

          <div className="h-[150px] m-3 px-2">
            <h1 className="block text-base font-medium text-[#07074D]">
              Job Experiences
            </h1>
            <p>{user.experience}</p>
          </div>
          <div className="h-[150px] m-3 px-2">
            <h1 className="block text-base font-medium text-[#07074D]">
              Volunteer Galleries
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 mt-5">
              {user && user?.image && user?.image.length > 0 ? (
                user?.image.map((img, index) => (
                  <div key={index}>
                    <img src={url + img} className="w-[300px]" alt="" />
                  </div>
                ))
              ) : (
                <p>no image</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {!show && <VolunteerEdit show={show} setShow={setShow} id={id} />}
    </div>
  );
};

export default Profile;
