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
      <p>
        {props.info.name}
        {props.info.email}
        {props.info.donationAmount}
      </p>
      <div>
        {test}
        {/* prizesEntered.map(prize => {
          return <PrizeInSummmary prize={prize}/>
        }) */}
      </div>
    </div>
  )
}