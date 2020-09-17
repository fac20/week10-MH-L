import React from "react";

const TimeBar = ({ pageStatus, updatePageStatus, counter, setCounter }) => {
  // make timer count down per second
  React.useEffect(() => {
    const startTimer = setTimeout(() => setCounter((timer) => timer - 1), 1000);
    return () => clearTimeout(startTimer);
  }, [counter, setCounter]);

  // if countdown is 0 - the loser page loads
  React.useEffect(() => {
    if (counter === 0) {
      updatePageStatus("loser");
    }
  }, [counter, updatePageStatus]);

  return (
    <div>
      <h2>Time Left: {counter}</h2>
    </div>
  );
};

export default TimeBar;
