import axios from "axios";
import { useEffect, useState } from "react";

const AllVolunteer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/volunteer`)
        .then((data) => {
          setUsers(data?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return [users];
};

export default AllVolunteer;
