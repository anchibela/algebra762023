import React from "react";

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <img src={user.avatar_url} className="avatar" alt="Avatar" />
      <p>Username: {user.login}</p>
      {user.location && <p>Location: {user.location}</p>}
      {user.bio && <p>Bio: {user.bio}</p>}
    </div>
  );
}

export default UserInfo;
