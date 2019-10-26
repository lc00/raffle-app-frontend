import React from "react";

export default function Tier(props) {
  const tiers = []

  for(let i in props.info.tiers) {
    tiers.push(<h3 key={i}>${i}: {props.info.tiers[i]} tickets</h3>)
  }

  return (
    <div>
      <h2>Tiers:</h2>    
      <ul>{tiers}</ul>

    </div>
  )
}