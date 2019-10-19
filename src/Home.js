import React from 'react'
import UserForm from "./UserForm";
import Tiers from "./Tiers"
import TopMessage from './TopMessage'
import Prizes from './Prizes'
import BottomMessage from './BottomMessage'

export default function Home(props) {
  return (
    <div>
      <div className="top-container">
        <UserForm info={props.info} allFunc={props.allFunc}/>
        <Tiers info={props.info}/>
      </div>
        <TopMessage info={props.info} allFunc={props.allFunc}/>
        <Prizes info={props.info} allFunc={props.allFunc}/>
        <BottomMessage info={props.info} allFunc={props.allFunc} />
        {/* <Buttons /> */}
    </div>
  )
}
