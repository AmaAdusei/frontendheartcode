import React from "react";
import "profilepage/style.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>MEDTech Future</h1>
        <h2>My Profile</h2>
      </header>
      <div className="profile-options">
        <button className="profile-button">User Information</button>
        <button className="profile-button">Emergency Contacts</button>
        <button className="profile-button">Notifications</button>
        <button className="profile-button">Privacy Settings</button>
        <button className="profile-button">Help and Support</button>
        <button className="profile-button logout">Log Out</button>
      </div>
    </div>
  );
};

export default Profile;
