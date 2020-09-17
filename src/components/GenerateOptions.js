import React from "react";
import locations from "./../utils/locations";

//Generatate 3 options
//Location Space4, Finsbury Park, Roti Place

const GenerateOptions = (options) => {
  // map out all three options
  const locationArray = locations.map((place) => {
    console.log(place);
    const hello = (event) => {
      event.preventDefault();
      console.log("hello");
    };
    return (
      <article key={place.name}>
        <h3>{place.name}</h3>
        <a href="" onClick={hello}>
          <img src={place.image} alt={place.name} width="500" height="600" />
        </a>
      </article>
    );
  });

  return <div>{locationArray}</div>;
};

export default GenerateOptions;
