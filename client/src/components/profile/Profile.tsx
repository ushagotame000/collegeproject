import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";

const Profile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const name = user.username;

  const [formData, setFormData] = useState({
    photoUrl: assets.profile,
    photo: null as File | null,
    userName: name,
    bio: "",
    dob: "",
    hobbies: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      userName: name,
      photoUrl: assets.profile,
    }));
  }, [name]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        photo: file,
        photoUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    if (formData.photo) {
      form.append("photo", formData.photo);
    }
    form.append("userName", formData.userName);
    form.append("bio", formData.bio);
    form.append("dob", formData.dob);
    form.append("hobbies", formData.hobbies);

    try {
      const response = await axios.post("/api/profile", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message || "Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form onSubmit={handleSubmit}>
        <div className="bg-gradient-to-r from-pink-300 via-purple-400 to-blue-300 profile-container flex flex-col w-96 mx-auto items-center rounded-lg p-6">
          <div className="profile relative mb-6">
            <div className="h-28 w-28 rounded-full bg-white">
              <img
                src={formData.photoUrl}
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <label
              htmlFor="photo-upload"
              className="absolute bottom-0 right-0 cursor-pointer"
            >
              <img
                src={assets.camera}
                alt="camera"
                className="w-10 h-10 bg-white rounded-full p-2"
              />
            </label>
          </div>

          <div className="profile-info-container flex flex-col items-center space-y-4 w-full">
            <div className="bio-section w-full flex flex-col items-start">
              <label htmlFor="userName" className="text-black">
                Name:
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                className="w-full p-2 border rounded-md focus:outline-none"
                placeholder="User Name"
                onChange={handleChange}
                value={formData.userName}
                readOnly
              />
            </div>
            <div className="bio-section w-full flex flex-col items-start">
              <label htmlFor="bio" className="text-black">
                Bio:
              </label>
              <textarea
                id="bio"
                name="bio"
                className="w-full p-2 border rounded-md focus:outline-none resize-none overflow-auto"
                placeholder="Tell us about yourself..."
                onChange={handleChange}
                value={formData.bio}
              ></textarea>
            </div>
            <div className="dob-section w-full flex flex-col items-start">
              <label htmlFor="dob" className="text-black">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full p-2 border rounded-md focus:outline-none"
                onChange={handleChange}
                value={formData.dob}
              />
            </div>
            <div className="hobbies-section w-full flex flex-col items-start">
              <label htmlFor="hobbies" className="text-black">
                Hobbies:
              </label>
              <input
                type="text"
                name="hobbies"
                id="hobbies"
                className="w-full p-2 border rounded-md focus:outline-none"
                placeholder="Enter your hobbies"
                onChange={handleChange}
                value={formData.hobbies}
              />
            </div>
            <div className="buttons flex space-x-5 items-center pt-3 w-full">
              <button
                type="submit"
                className="w-1/2 py-2 px-4 bg-purple-800 text-white text-center hover:bg-blue-500 rounded focus:outline-none"
              >
                Save
              </button>
              <button
                type="button"
                className="w-1/2 py-2 px-4 bg-gray-400 text-white text-center hover:bg-gray-300 rounded focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
