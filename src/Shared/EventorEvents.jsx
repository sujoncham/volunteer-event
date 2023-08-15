import axios from "axios";
import { useEffect, useState } from "react";

const EventorEvents = () => {
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("userId");

  const roleRole =
    role === "eventor" ? "eventor" : role === "volunteer" ? "volunteer" : "";

  const [events, setEvents] = useState({});
  //   console.log(events);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/${roleRole}/${id}/profile`)
        .then((data) => {
          setEvents(data?.data?.blog);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [id, roleRole]);

  return { events };
};

export default EventorEvents;
