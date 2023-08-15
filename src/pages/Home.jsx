import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const url = "http://localhost:5000/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}api/v1/event/`);
        setOriginalData(response.data.data);
        setSearchResults(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchTerm === "") {
      setSearchResults(originalData);
    } else {
      const results = originalData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(results);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold py-3">
          I grow by helping people in need
        </h1>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="border-2 border-purple-400 px-3 py-2 rounded-md"
            required
          />
          <button
            onClick={handleSearch}
            className="border-2 border-purple-500 bg-purple-500 rounded-md px-3 py-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-16 mb-10">
        <div className="grid grid-cols-5 gap-3">
          {searchResults.length === 0 ? (
            <p>No data</p>
          ) : (
            searchResults.map((event) => (
              <div key={event._id} className="relative">
                <img
                  src={url + event.image}
                  className="w-[400px] h-[300px] rounded-md"
                  alt=""
                />
                <button className="border-2 border-purple-400 bg-purple-500 h-[100px] px-3 py-2 absolute bottom-0 w-full text-white">
                  {event.title}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
