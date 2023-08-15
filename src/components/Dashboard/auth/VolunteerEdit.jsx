/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

const VolunteerEdit = ({ show, setShow, id }) => {
  const [image, setImage] = useState([]);
  const [inputs, setInputs] = useState({
    fullname: "",
    description: "",
    education: "",
    address: "",
    hobby: "",
    skills: "",
    experience: "",
    interests: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const user = localStorage.getItem("userId");
  console.log(user);

  const handleImageChange = (e) => {
    // setImage(event.target.files);
    setImage([...image, ...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", inputs.fullname);
    formData.append("description", inputs.description);
    formData.append("education", inputs.education);
    formData.append("address", inputs.address);
    formData.append("hobby", inputs.hobby);
    formData.append("skills", inputs.skills);
    formData.append("experience", inputs.experience);
    formData.append("interests", inputs.interests);

    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }

    await axios
      .patch(
        `http://localhost:5000/api/v1/volunteer/profile/${id}/profileUpdate`,
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
    setImage("");
    setInputs("");
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
              <label>Education:</label>
              <input
                type="text"
                name="education"
                value={inputs.education}
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
              <label>Date of Birth:</label>
              <input
                type="text"
                name="dateOfBirth"
                value={inputs.dateOfBirth}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Hobby:</label>
              <input
                name="hobby"
                value={inputs.hobby}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>interests:</label>
              <input
                name="hobby"
                value={inputs.interests}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Skills:</label>
              <input
                type="text"
                name="skills"
                value={inputs.skills}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Experience:</label>
              <textarea
                type="text"
                name="experience"
                value={inputs.experience}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>

            <div className="py-3">
              <label htmlFor="">Gallery Image</label>
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

export default VolunteerEdit;
