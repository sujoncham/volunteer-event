/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const EventEdit = ({ show, setShow, id }) => {
  //   const [image, setImage] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    vacancy: "",
    address: "",
    requirement: "",
    qualification: "",
    startingDate: "",
    endingDate: "",
  });

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/event/getEventById/${id}`)
        .catch((err) => console.log(err))
        .then((data) => {
          setInputs({
            title: data?.data?.blog?.title,
            vacancy: data?.data?.blog?.vacancy,
            address: data?.data?.blog?.address,
            qualification: data?.data?.blog?.qualification,
            requirement: data?.data?.blog?.requirement,
            startingDate: data?.data?.blog?.startingDate,
            endingDate: data?.data?.blog?.endingDate,
          });

          //   setImage(data?.data?.blog?.image);
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

  //   const handleImageChange = (e) => {
  //     if (e.target.files.length > 0) {
  //       // New image selected, set the state to the selected image
  //       setImage(e.target.files[0]);
  //     } else {
  //       // No new image selected, keep the existing image
  //       setImage(image); // Retain the existing image URL
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("vacancy", inputs.vacancy);
    formData.append("address", inputs.address);
    formData.append("requirement", inputs.requirement);
    formData.append("qualification", inputs.qualification);
    formData.append("startingDate", inputs.startingDate);
    formData.append("endingDate", inputs.endingDate);
    // formData.append("image", image);

    await axios
      .patch(
        `http://localhost:5000/api/v1/event/updateEventById/${id}`,
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
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label>vacancy:</label>
              <input
                type="text"
                name="vacancy"
                value={inputs.vacancy}
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
              <label>requirement:</label>
              <textarea
                type="text"
                name="requirement"
                value={inputs.requirement}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>qualification:</label>
              <textarea
                type="text"
                name="qualification"
                value={inputs.qualification}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <label>start date:</label>
                <input
                  type="date"
                  name="startingDate"
                  value={inputs.startingDate}
                  onChange={handleChange}
                  className="border-2 border-purple-400 p-2 rounded-md w-full"
                />
              </div>
              <div>
                {" "}
                <label>end date:</label>
                <input
                  type="date"
                  name="endingDate"
                  value={inputs.endingDate}
                  onChange={handleChange}
                  className="border-2 border-purple-400 p-2 rounded-md w-full"
                />
              </div>
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

export default EventEdit;
