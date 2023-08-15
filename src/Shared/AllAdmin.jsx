import axios from "axios";
import { useEffect, useState } from "react";

const AllAdmin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/admin/")
        .then((data) => {
          setAdmins(data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return [admins];
};

export default AllAdmin;
