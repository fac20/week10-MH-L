import React from "react";

const TimeBar = ({ counter, setCounter }) => {
  React.useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, setCounter]);

  return <h2>Time Left: {counter}</h2>;
};

export default TimeBar;
