import axios from "axios";
import { useEffect, useState } from "react";

const AllEventor = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/eventor`)
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

export default AllEventor;
