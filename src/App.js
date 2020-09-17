import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserSelection from "./components/UserSelection";
import GenerateEmail from "./components/GenerateEmail";
import userArray from "./utils/users.js";

function App() {
  const [username, setUsername] = React.useState("");
  // put error handling if murders are not chosen
  const generateMurdererAndMurderee = (username) => {
    if (username) {
      const potentialSuspects = userArray.filter(
        (user) => user.github !== username
      );

      const getRandomNumber = (length) => {
        return Math.floor(Math.random() * Math.floor(length));
      };

      let numberOne = getRandomNumber(potentialSuspects.length);
      let numberTwo;

      do {
        numberTwo = getRandomNumber(potentialSuspects.length);
      } while (numberOne === numberTwo);

      let murderer = potentialSuspects[numberOne];
      let murderee = potentialSuspects[numberTwo];
      return [murderee, murderer];
    }
  };
  const murdererAndMurderee = generateMurdererAndMurderee(username);

  return (
    <div>
      <UserSelection
        username={username}
        setUsername={setUsername}
      ></UserSelection>
      {username && murdererAndMurderee ? (
        <GenerateEmail
          murderee={murdererAndMurderee[0].name}
          username={username}
        ></GenerateEmail>
      ) : null}
    </div>
  );
}
export default App;
