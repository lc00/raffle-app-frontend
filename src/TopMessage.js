import React from "react";

export default function TopMessage(props) {
  let newStr = "";
  let arr = [];
  let emailValidated = false;

  function validateEmail(email) {
    return props.info.email.match(/\w+@\w+.\w+/)
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
      newStr = "Please enter your " + arr.join() + ".";
      break;
    case 2:
      newStr = "Please enter your " + arr.join(" and ") + ".";
      break;
    case 3:
      // newArr.push(arr[0])
      // newArr.push(arr[1])
      // newArr.join(', ')
      newStr = `Please enter your ${arr[0]}, ${arr[1]}, and ${arr[2]}.`;
      break;
    case 0:
    default:
      newStr = `Thanks! You have 1 tickets to spend.`;
      break;
  }
  return <h3>{newStr}</h3>;
}
