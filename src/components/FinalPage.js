import React from "react";
import getUserData from "./../utils/github_users.js";

const Loser = ({ murderee }) => {
  getUserData(murderee).then((user) => {
    console.log(murderee);
  });
  return (
    <div>
      <h2>Try again, better luck next time!</h2>
      <button>Redeem Yourself</button>
    </div>
  );
};

const Winner = ({ username }) => {
  const [image, setImage] = React.useState([]);
  React.useEffect(() => {
    getUserData(username).then((user) => setImage(user.avatar_url));
  }, [username]);

  return (
    <div>
      <h2>You're a winner!</h2>
      <img src={image} alt="Winner face"></img>
      <button>Save another Life</button>
    </div>
  );
};

export { Winner, Loser };
