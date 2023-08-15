import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EventEdit from "./EventEdit";

const EventDetails = () => {
  const { id } = useParams();
  const user = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  const [show, setShow] = useState(true);

  const url = `http://localhost:5000/`;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:5000/api/v1/event/${id}/apply`, {
        volunteers: user,
      })
      .then((data) => {
        console.log("inserted", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <div className="container mx-auto px-10 py-16">
        <div>
          {/* <img src={url} className="w-full h-[450px]" alt="" /> */}
          {event && event?.image ? (
            <img
              className="w-full h-[450px] rounded-md"
              src={url + event.image}
              alt=""
            />
          ) : (
            <p>No user image available.</p>
          )}
        </div>
        <div className="flex justify-start gap-5 mt-10">
          <div className="w-[80%]">
            {user === event.eventor && (
              <button
                onClick={() => setShow(!show)}
                className="border-2 border-purple-300 px-3 py-1 rounded-md"
              >
                Edit
              </button>
            )}
            <div>
              <h1 className="font-bold text-2xl mt-5">Job Title - {id}</h1>
              <p>{event.title}</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-5">Vacancy</h1>
              <p>{event.vacancy}</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-5">Requirements</h1>
              <p>{event.requirement}</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-5">Qualifications</h1>
              <p>{event.qualification}</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-5">
                Duration -{" "}
                {moment(event.endingDate).diff(
                  moment(event.startingDate),
                  "days"
                )}{" "}
                Days
              </h1>

              <p>
                <span className="font-bold">
                  {moment(event.startingDate).format("MMM D YYYY")}
                </span>{" "}
                to{" "}
                <span className="font-bold">
                  {moment(event.endingDate).format("MMM D YYYY")}
                </span>
              </p>
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-5">Location</h1>
              <p>{event.address}</p>
            </div>
            <div className="mt-10">
              {(!role === "eventor" || role === "volunteer") && (
                <button
                  onClick={handleSubmit}
                  className="border-2 border-blue-500 px-5 py-3 bg-blue-500 rounded-lg"
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>
          <div className="w-[20%] bg-blue-200 px-3 py-3">
            <h1>Applied - {event.volunteers?.length}</h1>
            <Link to={`/${id}/allApplication`}>see all applications</Link>
          </div>
        </div>
      </div>
      {!show && (
        <EventEdit
          show={show}
          setShow={setShow}
          id={id}
          url={url}
          event={event}
        />
      )}
    </div>
  );
};

export default EventDetails;
