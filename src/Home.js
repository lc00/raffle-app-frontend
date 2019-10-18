import React from 'react'
import UserForm from "./UserForm";
import Tiers from "./Tiers"
import TopMessage from './TopMessage'
import Prizes from './Prizes'

export default function Home(props) {
  return (
    <div>
      <div className="top-container">
        <UserForm info={props.info} allFunc={props.allFunc}/>
        <Tiers />
      </div>
        <TopMessage info={props.info} />
        <Prizes info={props.info} />
        {/* <BottomMessage /> */}
        {/* <Buttons /> */}
    </div>
  )
}
