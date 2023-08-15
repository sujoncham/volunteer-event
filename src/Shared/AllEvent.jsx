import axios from "axios";
import { useEffect, useState } from "react";

const AllEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/event/")
        .then((data) => {
          setEvents(data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return [events, setEvents];
};

export default AllEvent;
