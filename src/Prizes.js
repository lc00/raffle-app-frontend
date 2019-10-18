import React from "react";  
import Prize from './Prize';

export default function Prizes(props) {
  return (
    props.info.prizes.map(prize => {
      return <Prize prize={prize} userInfo={props.info}/>
    })
  )
}
