import React from "react";

export default function TopMessage(props) {
  let newStr = "Please enter your ";
  const [result, arr] = props.allFunc.checkUserInfo(props.info)

    
  switch (result) {
    case 1:
      newStr += `${arr.join()}.`;
      // this.handleTicketInputEnable(false)
      break;
    case 2:
      newStr += `${arr.join(' and ')}.`;
      // this.handleTicketInputEnable(false)
      break;
    case 3:
      newStr += `${arr[0]}, ${arr[1]}, and ${arr[2]}.`;
      // this.handleTicketInputEnable(false)
      break;
    case 0:
    default:
      newStr = `Thanks! You have 1 tickets to spend.`;
      break;
  }


  return <h3>{newStr}</h3>

}
