import React from 'react'
import UserForm from "./UserForm";
import Tiers from "./Tiers"
import TopMessage from './TopMessage'
import Prizes from './Prizes'

export default function Home(props) {
  return (
    <div>
      <div className="top-container">
        <UserForm />
        <Tiers />
      </div>
        <TopMessage />
        <Prizes prizes={props.info.prizes} />
        {/* <BottomMessage /> */}
        {/* <Buttons /> */}
    </div>
  )
}
