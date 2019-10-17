import React from "react";

export default function TopMessage(props) {
  let str = ''
  let newStr = ''
  let arr = []

  // validate email format

  
  if(!props.info.name)
    arr.push('name') 
  if(!props.info.email)
    arr.push('email')
  if(!props.info.donationAmount)
    arr.push('donation')

    switch (arr.length) {
      case 1:
        newStr = "Please enter your " + arr.join() + '.'
        break
      case 2:
        newStr = "Please enter your " + arr.join(' and ') + '.'
        break
      case 3:
        // newArr.push(arr[0])
        // newArr.push(arr[1])
        // newArr.join(', ')
        newStr = `Please enter your ${arr[0]}, ${arr[1]}, and ${arr[2]}.`
        break
      case 0:
      default:
        newStr = `Thanks! You have 1 tickets to spend.`
        break
  }
  return (
    <h3>{newStr}</h3>
  )

  // if(props.info.name && props.info.email && props.info.donationAmount) {
  //   return (
  //     <h3>Thanks! You have 1 tickets to spend.</h3>

  //     // <h3>Thanks! You have ${props.tiers[props.donationAmount]} tickets to spend.</h3>
  //   )
  // } else {
  //   return (
  //     <h3>Please enter your {str}</h3>
  //   )
  // }
}