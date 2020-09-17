import React from "react";
import "./App.css";
import UserSelection from "./components/UserSelection";
import GenerateEmail from "./components/GenerateEmail";
import GenerateOptions from "./components/GenerateOptions";
import userArray from "./utils/users.js";

function App() {
  const [username, setUsername] = React.useState("");
  const [locationStatus, updateLocationStatus] = React.useState(false);
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

  // function Greeting(props) {
  //   const locationStatus = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return <UserGreeting />;
  //   }
  //   return <GuestGreeting />;
  // }

  if (!locationStatus) {
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
            locationStatus={locationStatus}
            updateLocationStatus={updateLocationStatus}
          ></GenerateEmail>
        ) : null}
      </div>
    );
  } else if (locationStatus) {
    return (
      <div>
        {/* <Timer></Timer> */}
        <GenerateOptions></GenerateOptions>;
      </div>
    );
  }
}
export default App;
