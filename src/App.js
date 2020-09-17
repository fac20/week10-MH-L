import React from "react";
import "./App.css";
import UserSelection from "./components/UserSelection";
import GenerateEmail from "./components/GenerateEmail";
import GenerateOptions from "./components/GenerateOptions";
import userArray from "./utils/users.js";
import TimeBar from "./components/TimeBar";
import { Winner, Loser } from "./components/FinalPage";

function App() {
  const [username, setUsername] = React.useState("");
  const [pageStatus, updatePageStatus] = React.useState("home");

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
  //murderee is index 0 in array, and murderer is index 1
  const murdererAndMurderee = generateMurdererAndMurderee(username);

  if (pageStatus === "home") {
    return (
      // location status is false - render the  line 41-52
      // when you click button = location Sttus True
      //put the status update in generate email
      <div>
        <UserSelection
          username={username}
          setUsername={setUsername}
        ></UserSelection>
        {username && murdererAndMurderee ? (
          <GenerateEmail
            murderee={murdererAndMurderee[0].name}
            username={username}
            pageStatus={pageStatus}
            updatePageStatus={updatePageStatus}
          ></GenerateEmail>
        ) : null}
      </div>
    );
  } else if (pageStatus === "location") {
    return (
      <div>
        <TimeBar
          pageStatus={pageStatus}
          updatePageStatus={updatePageStatus}
        ></TimeBar>
        {/* <GenerateOptions
          counter={counter}
          setCounter={setCounter}
          updatePageStatus={updatePageStatus}
          pageStatus={pageStatus}
        ></GenerateOptions> */}
      </div>
    );
  } else if (pageStatus === "winner") {
    return <Winner username={username}></Winner>;
  } else if (pageStatus === "loser") {
    return <Loser murderee={murdererAndMurderee[0].github}></Loser>;
  }
}
export default App;
