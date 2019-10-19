import React from "react";

export default function Tier(props) {
  console.log('props', props)
  // const tiers = props.info.tiers.map(item => {
  //   return <h3>${Object.keys(item)}: {Object.values(item)} tickets</h3>
  // })

  const tiers = []

  for(let i in props.info.tiers) {
    tiers.push(<h3>${i}: {props.info.tiers[i]} tickets</h3>)
  }

  return (
    <div>
      <h2>Tiers:</h2>    
      <ul>{tiers}</ul>

    </div>
  )
}