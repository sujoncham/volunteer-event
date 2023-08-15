import moment from "moment";

import { Link } from "react-router-dom";
import AllEvent from "../Shared/AllEvent";
import EventorEvents from "../Shared/EventorEvents";

const Events = () => {
  const userRole = localStorage.getItem("role");
  const eventors = EventorEvents();
  console.log(eventors.events.events);
  const [events] = AllEvent();
  const url = `http://localhost:5000/`;

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center py-5">
          <h1 className="font-bold text-3xl">
            {events.length
              ? `Events ${events.length} are available`
              : "event not available now"}
          </h1>
          {userRole === "eventor" ? (
            <Link
              className="border-2 border-purple-300 px-2 py-2 rounded-md"
              to={"/addEvent"}
            >
              create event
            </Link>
          ) : (
            ""
          )}
        </div>
        <div>
          <hr />
        </div>
        <div>
          <h1 className="text-3xl font-bold py-5">Newest Events</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-5">
          {eventors.events.events?.length > 0
            ? eventors?.events?.events.map((event) => (
                <div
                  key={event._id}
                  className="flex justify-start gap-5 bg-white rounded-md px-5 py-3 relative"
                >
                  <div>
                    {event && event?.image ? (
                      <img
                        className="w-[400px] h-[200px] rounded-md"
                        src={url + event.image}
                        alt=""
                      />
                    ) : (
                      <p>No</p>
                    )}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{event.title}</h1>
                    <p>
                      Posted:{" "}
                      {moment(event.createdAt).format("MMM D YYYY, h:mm:ss a")}
                    </p>
                    <p>
                      Started: {moment(event.startingDate).format("MMM D YYYY")}
                    </p>
                    <p>
                      Ended: {moment(event.endingDate).format("MMM D YYYY")}
                    </p>
                    <p>Status: {event.status}</p>
                    <p>Location: {event.address}</p>
                    <p>
                      Applied:{" "}
                      {event.volunteers.length > 0
                        ? event.volunteers.length
                        : "0"}
                    </p>
                  </div>
                  <Link
                    to={`/eventDetail/${event._id}`}
                    className="border-2 border-purple-400 bg-purple-300 rounded-md px-2 py-1 absolute bottom-5 right-5"
                  >
                    event details
                  </Link>
                </div>
              ))
            : "no events"}
        </div>
        <div>
          <h1 className="text-3xl font-bold py-5">ALL Events</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-5">
          {events?.map((event) => (
            <div
              key={event._id}
              className="flex justify-start gap-5 bg-white rounded-md px-5 py-3 relative"
            >
              <div>
                {event && event?.image ? (
                  <img
                    className="w-[400px] h-[200px] rounded-md"
                    src={url + event.image}
                    alt=""
                  />
                ) : (
                  <p>No</p>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{event.title}</h1>
                <p>
                  Posted:{" "}
                  {moment(event.createdAt).format("MMM D YYYY, h:mm:ss a")}
                </p>
                <p>
                  Started: {moment(event.startingDate).format("MMM D YYYY")}
                </p>
                <p>Ended: {moment(event.endingDate).format("MMM D YYYY")}</p>
                <p>Status: {event.status}</p>
                <p>Location: {event.address}</p>
                <p>
                  Applied:{" "}
                  {event.volunteers.length > 0 ? event.volunteers.length : "0"}
                </p>
              </div>
              <Link
                to={`/eventDetail/${event._id}`}
                className="border-2 border-purple-400 bg-purple-300 rounded-md px-2 py-1 absolute bottom-5 right-5"
              >
                event details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
