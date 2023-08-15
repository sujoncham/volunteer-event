import axios from "axios";
import { useEffect, useState } from "react";

const VolunteerEvent = () => {
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("userId");
  const roleRole =
    role === "eventor" ? "eventor" : role === "volunteer" ? "volunteer" : "";

  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/${roleRole}/${id}/profile`)
        .then((data) => {
          // console.log(data.data.blog);
          setUser(data?.data?.blog);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [id, roleRole]);

  return user;
};

export default VolunteerEvent;
