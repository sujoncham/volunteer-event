import { useState } from "react";
import EventorLogin from "./EventorLogin";
import VolunteerLogin from "./VolunteerLogin";

const WelcomeLogin = () => {
  const [show, setShow] = useState(true);
  const [eventor, setEventor] = useState(false);
  const [volunteer, setVolunteer] = useState(false);

  const handleButton1Click = () => {
    setShow(false);
    setEventor(true);
    setVolunteer(false);
  };

  const handleButton2Click = () => {
    setShow(false);
    setEventor(false);
    setVolunteer(true);
  };
  return (
    <div className="container mx-auto px-5 flex justify-between items-center gap-5">
      {/* <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12"> */}
      <div className="w-[50%] px-10">
        <div
          className={
            eventor
              ? "bg-gray-800 px-5 py-10 h-[250px] mt-5 rounded-md text-white"
              : "bg-gray-500 px-5 py-10 h-[250px] mt-5 rounded-md"
          }
        >
          <h1 className="text-4xl font-bold text-center">Organizer Part</h1>
          <div className="py-5">
            <button
              type="submit"
              onClick={handleButton1Click}
              className="border-2 border-purple-400 px-3 py-2 rounded-md w-full"
            >
              login
            </button>
          </div>
        </div>
        <div
          className={
            volunteer
              ? "bg-gray-800 px-5 py-10 h-[250px] mt-5 rounded-md"
              : "bg-gray-500 px-5 py-10 h-[250px] mt-5 rounded-md"
          }
        >
          <h1 className="text-4xl font-bold text-center">Participants Part</h1>
          <div className="py-5">
            <button
              type="submit"
              onClick={handleButton2Click}
              className="border-2 border-purple-400 px-3 py-2 rounded-md w-full"
            >
              login
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] px-10">
        {show ? (
          <div>
            <h1 className="text-3xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
              vero!
            </h1>
          </div>
        ) : null}

        {eventor ? <EventorLogin /> : null}
        {volunteer ? <VolunteerLogin /> : null}
      </div>
    </div>
  );
};

export default WelcomeLogin;
