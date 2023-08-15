import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllApplication = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  console.log(event);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/event/getEventById/${id}`)
        .then((data) => {
          // console.log("successfully get data", data);
          setEvent(data.data.blog);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [id]);

  return (
    <div className="bg-blue-300">
      <div className="container mx-auto px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Fullname
                      </th>
                      <th scope="col" className="px-6 py-4">
                        email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        remark
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.volunteers?.map((user) => (
                      <tr
                        key={user._id}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.fullname}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.address}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          no comment
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApplication;
