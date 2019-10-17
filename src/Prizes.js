import React from "react";  
import Prize from './Prize';

export default function Prizes(props) {
  return (
    props.prizes.map(prize => {
      return <Prize props={props}/>
    })
  )
}
