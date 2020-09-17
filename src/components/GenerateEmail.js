import React from "react";
import userArray from "./../utils/users.js";

const GenerateEmail = ({
  username,
  murderee,
  pageStatus,
  updatePageStatus,
}) => {
  const getUserInfo = userArray.filter((user) => user.github === username);
  const turnToLocation = () => updatePageStatus("location");
  return (
    <article>
      <h2>Subject: HELP!!!</h2>
      <h3>To: {getUserInfo[0].name}</h3>
      <h3>From: Anonymous</h3>
      <p>
        {murderee} is about to be murdered! Only you can save them if you can
        investigate the location, the weapon and the mudered to prevent this
        atrocious heinous crime!
        <br />
        Hurry and do not waste any time, if you guess incorrectly the time bar
        will decrease noticeably and {murderee}'s chances of survival will be
        getting slimmer...
        <br />
        Lots of love, a fellow coder x
      </p>
      <button onClick={turnToLocation}>
        What the FAC? Let's Solve some Crime!
      </button>
    </article>
  );
};
export default GenerateEmail;
