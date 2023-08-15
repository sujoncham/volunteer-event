import axios from "axios";
import { useEffect, useState } from "react";

const VolunteerShare = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/volunteer")
        .then((data) => {
          console.log("successfully get data", data);
          setUsers(data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return [users];
};

export default VolunteerShare;
