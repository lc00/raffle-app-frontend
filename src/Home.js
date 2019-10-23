import React from 'react'
import UserForm from "./UserForm";
import Tiers from "./Tiers"
import TopMessage from './TopMessage'

import PrizeForm from './PrizeForm'

export default function Home(props) {
  return (
    <div>
      <div className="top-container">
        <UserForm info={props.info} allFunc={props.allFunc}/>
        <Tiers info={props.info}/>
      </div>
        <TopMessage info={props.info} allFunc={props.allFunc}/>
        {/* <Prizes info={props.info} allFunc={props.allFunc}/> */}
        {/* <BottomMessage info={props.info} allFunc={props.allFunc} /> */}
        {/* <Buttons info={props.info} allFunc={props.allFunc}  /> */}
        <PrizeForm info={props.info} allFunc={props.allFunc} />
    </div>
  )
}
