import React from 'react'
import UserForm from "./UserForm";
import Tiers from "./Tiers"
import TopMessage from './TopMessage'
import Prizes from './Prizes'
import BottomMessage from './BottomMessage'
import Buttons from './Buttons'

export default function Home(props) {
  return (
    <div>
      <div className="top-container">
        <UserForm {...props} {...props.allFunc}/>
        <Tiers {...props}/>
      </div>
      <div className='top-message-container'>
        <TopMessage {...props} {...props.allFunc}/>
      </div>
        <div className='prizes-container'>
          <Prizes {...props} {...props.allFunc} />
        </div>
        <BottomMessage {...props} {...props.allFunc} />
        <div className='buttons-container'>
          <Buttons  {...props} {...props.allFunc}  />
        </div>
    </div>
  )
}
