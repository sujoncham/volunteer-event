import axios from "axios";
import { useState } from "react";
const AddEvent = () => {
  const [image, setImage] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    vacancy: "",
    address: "",
    requirement: "",
    qualification: "",
    startingDate: "",
    endingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [open, setOpen] = useState(null);

  const user = localStorage.getItem("userId");
  console.log(user);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setOpen(true);
  };

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
    formData.append("image", image);
    formData.append("eventor", user);

    await axios
      .post("http://localhost:5000/api/v1/event/addEvent", formData)
      .then((data) => {
        console.log("inserted", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center gap-10">
      <div className="w-[50%] py-10">
        <form onSubmit={handleSubmit}>
          <div>
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
              <label>Vacancy:</label>
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
              <label>Requirement:</label>
              <textarea
                name="requirement"
                value={inputs.requirement}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>

            <div>
              <label>Qualification:</label>
              <textarea
                type="text"
                name="qualification"
                value={inputs.qualification}
                onChange={handleChange}
                className="border-2 border-purple-400 p-2 rounded-md w-full"
              />
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <label>starting Date:</label>
                <input
                  type="date"
                  name="startingDate"
                  value={inputs.startingDate}
                  onChange={handleChange}
                  className="border-2 border-purple-400 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label>Ending Date:</label>
                <input
                  type="date"
                  name="endingDate"
                  value={inputs.endingDate}
                  onChange={handleChange}
                  className="border-2 border-purple-400 p-2 rounded-md w-full"
                />
              </div>
            </div>
          </div>
          <div>
            {open && (
              <img
                className={"w-56 h-56" + (image === "" ? "hidden" : "block")}
                src={image === "" ? "" : URL.createObjectURL(image)}
                alt=""
              />
            )}
          </div>
          <div className="py-3">
            <label htmlFor="">Topic Image</label>
            <input
              type="file"
              name="image"
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
  );
};
export default AddEvent;
