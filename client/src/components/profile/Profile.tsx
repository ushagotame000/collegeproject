import React, { useState, ChangeEvent } from "react";
import { assets } from "../../assets/assets";

const Profile: React.FC = () => {
  const [photo, setPhoto] = useState<string>(assets.profile);
  const [bio, setBio] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("");

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleDobChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDob(event.target.value);
  };

  const handleHobbiesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHobbies(event.target.value);
  };

  const handleCancel = () => {
    setPhoto(assets.profile);
    setBio("");
    setDob("");
    setHobbies("");
  };

  return (
    <>
      <form action="">
        <div className="profile-container mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center mt-14 bg-slate-500 rounded-lg p-6">
          <div className="profile relative mb-6">
            <img
              src={photo}
              alt="profile"
              className="w-44 h-44 rounded-full object-cover"
            />
            <input
              type="file"
              id="photo-upload"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <label htmlFor="photo-upload">
              <img
                src={assets.camera}
                alt="camera"
                className="w-10 ml-28 -mt-20 bg-white rounded-full p-2 cursor-pointer fixed"
              />
            </label>
          </div>

          <div className="profile-info-container flex flex-col items-center space-y-4">
            <div className="bio-section w-full flex flex-col items-center">
              <label htmlFor="bio" className="text-white">Bio:</label>
              <textarea
                id="bio"
                className="w-full p-2 border rounded-md"
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={handleBioChange}
              ></textarea>
            </div>
            <div className="dob-section w-full flex flex-col items-center">
              <label htmlFor="dob" className="text-white">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                className="w-full p-2 border rounded-md"
                value={dob}
                onChange={handleDobChange}
              />
            </div>
            <div className="hobbies-section w-full flex flex-col items-center">
              <label htmlFor="hobbies" className="text-white">Hobbies:</label>
              <input
                type="text"
                id="hobbies"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your hobbies"
                value={hobbies}
                onChange={handleHobbiesChange}
              />
            </div>
            <div className="buttons flex space-x-5 items-center pb-3">
              <button type="submit" className="w-1/2 py-2 px-4 bg-purple-500 text-white text-center hover:bg-purple-300 rounded focus:outline-none border-b border-black">Save</button>
              <button type="button" className="w-1/2 py-2 px-4 bg-gray-400 text-white text-center hover:bg-gray-300 rounded focus:outline-none border-b border-black" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
