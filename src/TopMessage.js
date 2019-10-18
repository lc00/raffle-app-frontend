import React from "react";

export default function TopMessage(props) {
  let newStr = "Please enter your ";
  let arr = [];
  let emailValidated = false;

  // todo: move all the logic to App.js so it can set its 
  // state and pass the info down to this component and 
  // the each prize for enabled/disabled textfield
  function validateEmail(email) {
    return props.info.email.match(/\w+@\w+[.]\w+/)
  }

  if (!props.info.name) arr.push("name");

  if (!props.info.email) arr.push("email");
  else {
    emailValidated = validateEmail(props.info.email);
    if (!emailValidated) arr.push("email");
  }

  if (!props.info.donationAmount) arr.push("donation");

  switch (arr.length) {
    case 1:
      newStr += `${arr.join()}.`;
      break;
    case 2:
      newStr += `${arr.join(' and ')}.`;
      break;
    case 3:
      newStr += `${arr[0]}, ${arr[1]}, and ${arr[2]}.`;
      break;
    case 0:
    default:
      newStr = `Thanks! You have 1 tickets to spend.`;

      // todo: update parent state


      break;
  }
  return <h3>{newStr}</h3>;
}
