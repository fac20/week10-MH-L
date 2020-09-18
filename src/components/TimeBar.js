import React from "react";

const TimeBar = ({ pageStatus, updatePageStatus, counter, setCounter }) => {
  // make timer count down per second
  //only happens when the page has rendered
  React.useEffect(() => {
    // const startTimer = setTimeout(() => setCounter(counter - 1), 1000);
    // What is the difference between these two?
    const startTimer = setInterval(() => {
      setCounter((currentCounter) => currentCounter - 1);
    }, 1000);
    // only happens at the end, when the components have been dismounted
    return () => clearInterval(startTimer);
  }, [setCounter]);

  // if countdown is 0 - the loser page loads
  React.useEffect(() => {
    if (counter <= 0) {
      updatePageStatus("loser");
    }
  }, [counter, updatePageStatus]);

  return (
    <div className="time-div">
      <h2>Time Left: {counter}</h2>
    </div>
  );
};

export default TimeBar;
