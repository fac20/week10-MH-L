import React from "react";
import getUserData from "./../utils/github_users.js";

const Loser = ({ murderee, pageStatus, updatePageStaus }) => {
  const [image, setImage] = React.useState([]);
  React.useEffect(() => {
    getUserData(murderee).then((user) => setImage(user.avatar_url));
  }, [murderee]);

  return (
    <div>
      <h2>You let them die! Try again, better luck next time!</h2>
      <img src={image} alt="murdered person"></img>
      <button>Redeem Yourself</button>
    </div>
  );
};

const Winner = ({ username, pageStatus, updatePageStaus }) => {
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
