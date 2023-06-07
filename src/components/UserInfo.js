import React from "react";

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <img src={user.avatar_url} alt="Avatar" className="avatar" />
      <div className="user-details">
        <p className="username">Username: {user.login}</p>
        {user.location && <p className="location">Location: {user.location}</p>}
        {user.bio && <p className="bio">Bio: {user.bio}</p>}
      </div>
    </div>
  );
}

export default UserInfo;
