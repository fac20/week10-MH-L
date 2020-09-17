import React from "react";
import locations from "./../utils/locations";
import weapons from "./../utils/weapons";

//Generate 3 options
//Location Space4, Finsbury Park, Roti Place

const GenerateOptions = ({ counter, setCounter }) => {
  // if (pageStatus === "location") {
  //   array = locations;
  // }
  // find random location to be correct
  const rightLocation =
    locations[Math.floor(Math.random() * Math.floor(2))].name;
  console.log(rightLocation);
  // event listener
  const rightOption = (event) => {
    if (event.target.alt === rightLocation) {
      console.log("yayaa!");
      //go to the next page
      // pageStatus === "weapon"
    } else {
      console.log(event.target);
      console.log("nay");
      setCounter(counter - 15);
    }
  };
  // renders the three options
  const locationArray = locations.map((place) => {
    return (
      <article key={place.name}>
        <h3>{place.name}</h3>
        <button onClick={rightOption} name={place.name}>
          <img src={place.image} alt={place.name} width="500" height="600" />
        </button>
      </article>
    );
  });

  return <div>{locationArray}</div>;
};

export default GenerateOptions;
