import React from "react";
import userArray from "./../utils/users.js";

const UserSelection = () => {
  const [username, setUsername] = React.useState("");
  // const [originalSuspects, updateSuspects] = React.useState(userArray);
  const selectUser = (event) => {
    setUsername(event.target.value);
    const potentialSuspects = userArray.filter(
      (user) => user.github !== event.target.value
    );
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
