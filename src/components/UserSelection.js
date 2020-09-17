import React from "react";
import userArray from "./../utils/users.js";

const UserSelection = ({ username, setUsername }) => {
  const selectUser = (event) => {
    setUsername(event.target.value);
  };

  const userOptions = userArray.map((user) => {
    return (
      <option value={user.github} key={user.github}>
        {user.name}
      </option>
    );
  });

  return (
    <form>
      <label htmlFor="userSelect">Choose a User</label>
      <select name="userSelect" id="userSelect" onChange={selectUser}>
        {userOptions}
      </select>
    </form>
  );
};

export default UserSelection;
