import React from "react";
import locations from "./../utils/locations";
import weapons from "./../utils/weapons";
// import userArray from "./../utils/users";

//Generate 3 options
//Location Space4, Finsbury Park, Roti Place

const GenerateOptions = ({
  counter,
  setCounter,
  pageStatus,
  updatePageStatus,
  username,
  murderee,
}) => {
  let arrayOption = [];

  if (pageStatus === "location") {
    arrayOption = [...locations];
  } else if (pageStatus === "weapons") {
    arrayOption = [...weapons];
    // } else if (pageStatus === "murderer") {
    //   const murderArray = userArray.filter((suspects) => {
    //     if (suspects.github !== username && suspects.github !== murderee) {
    //       return suspects;
    //     }
    //     return suspects;
    //   });
    //   console.log(murderArray);
    //   // we now have an array without suspects objects with "name" and "github" but we want "name" and "img src"
    //   const [image, setImage] = React.useState([]);
    //   React.useEffect(()=> {
    //     murderArray.map((suspects) => {
    //     getUserData(username).then((user) => setImage(user.avatar_url))
    //   },[username])

    //   })
  }

  // find random location to be correct
  const rightChoice = React.useMemo(
    () =>
      arrayOption[Math.floor(Math.random() * Math.floor(arrayOption.length))]
        .name,
    [pageStatus] //why does the first time you rended give you one choice and then change?
  );

  // event listener
  const rightOption = (event) => {
    if (event.target.alt === rightChoice && pageStatus === "location") {
      return updatePageStatus("weapons");
    } else if (event.target.alt === rightChoice && pageStatus === "weapons") {
      return updatePageStatus("winner");
      // } else if (event.target.alt === rightChoice && pageStatus === "murderer") {
      //   return updatePageStatus("winner");
      //ASK HOW TO COORDINATE STATE WITH A TIME OUT
    } else {
      setCounter((timer) => timer - 15);
    }
  };
  // renders the three options
  const options = arrayOption.map((option) => {
    return (
      <article key={option.name}>
        <h3>{option.name}</h3>
        <button onClick={rightOption} name={option.name}>
          <img src={option.image} alt={option.name} width="600" height="500" />
        </button>
      </article>
    );
  });

  return <div class="options-div">{options}</div>;
};

export default GenerateOptions;
