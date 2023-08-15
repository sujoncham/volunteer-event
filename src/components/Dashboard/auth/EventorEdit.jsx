import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const EventorEdit = ({ show, setShow, id }) => {
  const [detail, setDetail] = useState({});
  const [image, setImage] = useState([]);
  const [inputs, setInputs] = useState({
    fullname: "",
    description: "",
    address: "",
    mission: "",
    phone: "",
    website: "",
  });
  console.log("hello", detail);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/eventor/${id}/profile`)
        .catch((err) => console.log(err))
        .then((data) => {
          console.log(data);
          setDetail(data.data.blog);
          setInputs({
            fullname: data?.data?.blog?.fullname,
            description: data?.data?.blog?.description,
            address: data?.data?.blog?.address,
            mission: data?.data?.blog?.mission,
            phone: data?.data?.blog?.phone,
            website: data?.data?.blog?.website,
          });

          setImage([data?.data?.blog?.image]);
        });
    };
    getData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    // setImage(event.target.files);
    setImage([...image, ...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", inputs.fullname);
    formData.append("description", inputs.description);
    formData.append("address", inputs.address);
    formData.append("mission", inputs.mission);
    formData.append("phone", inputs.phone);
    formData.append("website", inputs.website);
    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }

    await axios
      .patch(
        `http://localhost:5000/api/v1/eventor/profile/${id}/updateProfile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((data) => {
        console.log("inserted", data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setImage([]);
    // setInputs({});
  };
  return (
    <div className="fixed top-14 w-[50%] left-80  z-50 bg-gray-500 px-2 py-2 border-2 border-pink-500 overflow-y-auto h-[600px]">
      <button
        onClick={() => setShow(!show)}
        className="border-2 border-gray-200 px-1 py-1 rounded-md"
      >
        close
      </button>
      <p>{id}</p>
      <div className="container mx-auto flex justify-center items-center gap-10">
        <div className="w-[100%] py-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Full name:</label>
              <input
                type="text"
                name="fullname"
                value={inputs.fullname}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label>Description:</label>
              <textarea
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Mission & Vision:</label>
              <textarea
                type="text"
                name="mission"
                value={inputs.mission}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={inputs.address}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={inputs.phone}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Website:</label>
              <input
                type="text"
                name="website"
                value={inputs.website}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="py-3">
              <label>
                Gallery Image{" "}
                {detail && detail.image && detail.image.length > 0
                  ? detail?.image?.length
                  : "none"}
              </label>
              <input
                type="file"
                name="image"
                multiple
                onChange={handleImageChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <button
              className="border-2 border-purple-400 p-2 rounded-md w-full hover:bg-purple-500"
              type="submit"
            >
              create add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventorEdit;
