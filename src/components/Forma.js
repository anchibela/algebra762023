import React, { useState } from "react";
import UserInfo from "./UserInfo";

function Forma() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("User not found");
        }
      })
      .then((data) => {
        setUser(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setUser(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="container centered-form">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <p>Unesite ime korisnika čije repozitorije želite vidjeti:</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ime korisnika:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Pretraži!
              </button>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
          {user && <UserInfo user={user} />}
        </div>
      </div>
    </div>
  );
}

export default Forma;
