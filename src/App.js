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
  const [counter, setCounter] = React.useState(60);

  const generateMurderee = (username) => {
    if (username) {
      const potentialSuspects = userArray.filter(
        (user) => user.github !== username
      );
      const getRandomNumber = (length) => {
        return Math.floor(Math.random() * Math.floor(length));
      };
      let numberOne = getRandomNumber(potentialSuspects.length);
      let murderee = potentialSuspects[numberOne];
      return murderee;
    }
  };

  const murderee = React.useMemo(() => {
    return generateMurderee(username);
  }, [username]);

  if (pageStatus === "home") {
    return (
      // location status is false - render the  line 41-52
      // when you click button = location Sttus True
      //put the status update in generate email
      <div className="home-div">
        <UserSelection
          username={username}
          setUsername={setUsername}
        ></UserSelection>
        {username && murderee ? (
          <GenerateEmail
            murderee={murderee.name}
            username={username}
            pageStatus={pageStatus}
            updatePageStatus={updatePageStatus}
          ></GenerateEmail>
        ) : null}
      </div>
    );
  } else if (pageStatus === "location" || pageStatus === "weapons") {
    return (
      <div>
        <TimeBar
          counter={counter}
          setCounter={setCounter}
          pageStatus={pageStatus}
          updatePageStatus={updatePageStatus}
        ></TimeBar>
        <GenerateOptions
          user={username}
          murderee={murderee.github}
          counter={counter}
          setCounter={setCounter}
          updatePageStatus={updatePageStatus}
          pageStatus={pageStatus}
        ></GenerateOptions>
      </div>
    );
  } else if (pageStatus === "winner") {
    return (
      <Winner
        username={username}
        pageStatus={pageStatus}
        updatePageStatus={updatePageStatus}
        setUsername={setUsername}
        counter={counter}
        setCounter={setCounter}
      ></Winner>
    );
  } else if (pageStatus === "loser") {
    return (
      <Loser
        murderee={murderee.github}
        pageStatus={pageStatus}
        updatePageStatus={updatePageStatus}
        setUsername={setUsername}
        counter={counter}
        setCounter={setCounter}
      ></Loser>
    );
  }
}
export default App;
