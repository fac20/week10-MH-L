import React from "react";
import getUserData from "./../utils/github_users.js";

const Loser = ({
  murderee,
  pageStatus,
  updatePageStatus,
  setUsername,
  counter,
  setCounter,
}) => {
  const [image, setImage] = React.useState([]);
  React.useEffect(() => {
    getUserData(murderee).then((user) => setImage(user.avatar_url));
  }, [murderee]);
  const startAgain = () => {
    updatePageStatus("home");
    setUsername("");
    setCounter(60);
  };
  return (
    <div className="final-page">
      <h2>You let them die! Try again, better luck next time!</h2>
      <img src={image} alt="murdered person"></img>
      <button onClick={startAgain}>Redeem Yourself</button>
    </div>
  );
};

const Winner = ({
  username,
  pageStatus,
  updatePageStatus,
  setUsername,
  setCounter,
  counter,
}) => {
  const [image, setImage] = React.useState([]);
  React.useEffect(() => {
    getUserData(username).then((user) => setImage(user.avatar_url));
  }, [username]);
  const startAgain = () => {
    updatePageStatus("home");
    setUsername("");
    setCounter(60);
  };
  return (
    <div className="final-page">
      <h2>You are a winner baaaby!</h2>
      <img src={image} alt="Winner face"></img>
      <button onClick={startAgain}>Save another Life</button>
    </div>
  );
};

export { Winner, Loser };
