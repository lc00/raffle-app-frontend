import React from "react";  
import PrizeInSummmary from './PrizeInSummary'

export default function Summary(props) {
console.log('props.info', props.info)
  const prizesEntered = props.info.prizes.filter(prize => {
    return prize.currentUserTicketsEntered > 0
  })

  const test = prizesEntered.map(prize => {
    return <PrizeInSummmary prize={prize}/>
  })

  return (
    <div>
      <h3>Here's your summary:</h3>
      <h5>name: {props.info.name}</h5>
      <h5>email: {props.info.email}</h5>
      <h5>donation: {props.info.donationAmount}</h5>
      <div>
        {test}
        {/* prizesEntered.map(prize => {
          return <PrizeInSummmary prize={prize}/>
        }) */}
      </div>
    </div>
  )
}