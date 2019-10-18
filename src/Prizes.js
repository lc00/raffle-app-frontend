import React from "react";  
import Prize from './Prize';

export default function Prizes(props) {
  const [result] = props.allFunc.checkUserInfo(props.info)
  let isUserInfoAllEntered = false

  result === 0 ? isUserInfoAllEntered = true : isUserInfoAllEntered = false
  


  return (
    props.info.prizes.map(prize => {
      return <Prize prize={prize} info={props.info} allFunc={props.allFunc}
      isUserInfoAllEntered={isUserInfoAllEntered}
      />
    })
  )
}
