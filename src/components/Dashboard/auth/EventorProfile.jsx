import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img2 from "../../../assets/images/cleanWater.png";
import EventorEdit from "./EventorEdit";

const EventorProfile = () => {
  const { id } = useParams();
  const role = localStorage.getItem("role");
  const [show, setShow] = useState(true);
  const roleRole =
    role === "eventor" ? "eventor" : role === "volunteer" ? "volunteer" : "";

  const [user, setUser] = useState({});
  console.log(user);
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
    <div className="container mx-auto px-10 py-10">
      <h1>Hello {id}</h1>
      <button
        onClick={() => setShow(!show)}
        className="border-2 border-gray-200 px-1 py-1 rounded-md"
      >
        edit
      </button>
      <div className="flex justify-end">
        {user && user?.image && user.image[0] ? (
          <img className="w-28 h-28" src={url + user.image[0]} alt="" />
        ) : (
          <img className="w-28 h-28" src={img2} alt="" />
        )}
      </div>
      <div>
        <h1 className="text-5xl font-bold py-10 text-right">{user.fullname}</h1>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-right mt-10">About Us</h1>
        <p>{user.description}</p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-10">Mission & Vision</h1>
        <p>{user.mission}</p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-10">Address</h1>
        <p>{user.address}</p>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-bold mt-10 mb-5">Photo Galleries</h1>
        <div className="grid grid-cols-4 gap-3">
          {user && user?.image && user?.image.length > 0 ? (
            user?.image.map((img, index) => (
              <div key={index}>
                <img src={url + img} className="w-full h-48" alt="" />
              </div>
            ))
          ) : (
            <p>no image</p>
          )}
        </div>
      </div>
      {!show && <EventorEdit show={show} setShow={setShow} id={id} />}
    </div>
  );
};

export default EventorProfile;
