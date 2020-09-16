import React from "react";
import userArray from "./../utils/users.js";

const UserSelection = () => {
  const [username, setUsername] = React.useState("");
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
  console.log(username);

  const [originalSuspects, updateSuspects] = React.useState(userArray);
  const removeUserFromSuspects = (username) => {
    //use filter option to get new array
    const userIndex = userArray.findIndex((user, index) => {
      // console.log(user);
      if (user.github === username) {
        console.log(user, index);
        return userArray.splice(index, 1);
      }
    });
    updateSuspects(originalSuspects);
    // console.log(originalSuspects);
  };

  // shows up twice if it is console logged
  // console.log(username);
  return (
    <form>
      <label htmlFor="userSelect">Choose a User</label>
      <select
        name="userSelect"
        id="userSelect"
        onChange={selectUser}
        onChange={removeUserFromSuspects}
      >
        {userOptions}
      </select>
    </form>
  );
};

export default UserSelection;
