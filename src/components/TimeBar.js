import React from "react";
import GenerateOptions from "./GenerateOptions";

const TimeBar = ({ pageStatus, updatePageStatus }) => {
  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      updatePageStatus("loser");
    }
  }, [counter, setCounter, updatePageStatus]);

  return (
    <div>
      <h2>Time Left: {counter}</h2>
      <GenerateOptions
        counter={counter}
        setCounter={setCounter}
        updatePageStatus={updatePageStatus}
        pageStatus={pageStatus}
      ></GenerateOptions>
    </div>
  );
};

export default TimeBar;
