const MainDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold py-10">Welcome To Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 text-white">
        <div className="bg-purple-600 rounded-md px-5 py-10">
          <h1 className="text-2xl font-bold">Volunteers</h1>
          <p>5212</p>
        </div>
        <div className="bg-purple-600 rounded-md px-5 py-10">
          <h1 className="text-2xl font-bold">Volunteers</h1>
          <p>5212</p>
        </div>
        <div className="bg-purple-600 rounded-md px-5 py-10">
          <h1 className="text-2xl font-bold">Volunteers</h1>
          <p>5212</p>
        </div>
        <div className="bg-purple-600 rounded-md px-5 py-10">
          <h1 className="text-2xl font-bold">Volunteers</h1>
          <p>5212</p>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
