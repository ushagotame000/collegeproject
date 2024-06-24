import React, { useState, ChangeEvent } from 'react';
import { assets } from '../../assets/assets';

const Profile: React.FC = () => {
  const [photo, setPhoto] = useState<string>(assets.profile);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <div className="profile-container justify-center flex mt-14 bg-slate-500 ">
        <div className="profile relative">
          <img src={photo} alt="profile" className="w-44 h-44 rounded-full" />
          <input
            type="file"
            id="photo-upload"
            className="hidden fixed"
            accept="image/*"
            onChange={handlePhotoChange}
          />
           <label htmlFor="photo-upload">
            <img
              src={assets.camera}
              alt="camera"
              className="w-10  ml-28 -mt-16 bg-white rounded-full p-2 cursor-pointer fixed"
            />
           </label>
        
        </div>
      </div>
    </>
  );
};

export default Profile;
