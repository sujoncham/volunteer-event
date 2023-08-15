import VolunteerShare from "./RequireAuth/VolunteerShare";

const MyVolunteer = () => {
  const [users] = VolunteerShare();
  const url = `http://localhost:5000/`;

  return (
    <div className="bg-blue-100">
      <div className="container mx-auto px-10">
        <h1 className="text-3xl font-bold py-5">Volunteer List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-5">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex justify-start gap-5 bg-white rounded-md px-5 py-3 relative"
            >
              <img src={url + user?.image[0]} className="w-[150px]" alt="" />
              <div>
                <h1 className="text-2xl font-bold">{user.fullname}</h1>
                <p>Started: 25 Sep, 2023</p>
                <p>Ended: 29 Sep, 2023</p>
                <p>Status: Success</p>
              </div>
              <button className="border-2 border-purple-400 bg-purple-300 rounded-md px-2 py-1 absolute bottom-5 right-5">
                cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyVolunteer;
