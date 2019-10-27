import React from "react";

export default function Tiers(props) {
  const tiers = []

  for(let i in props.info.tiers) {
    tiers.push(<div key={i} className='tier'>${i}: {props.info.tiers[i]} tickets</div>)
  }

  return (
    <div class='tiers-container'>
      <h2 class='text-left tiers-title'>Tiers</h2>    
      <ul class='tiers-info'>{tiers}</ul>

    </div>
  )
}