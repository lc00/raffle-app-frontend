import React from "react";

export default function Tier(props) {
  const tiers = props.info.tiers.map(item => {
    return <h3>${item.amount}: {item.tickets} tickets</h3>
  })

  return (
    <div>
      <h2>Tiers:</h2>    
      <ul>{tiers}</ul>

    </div>
  )
}